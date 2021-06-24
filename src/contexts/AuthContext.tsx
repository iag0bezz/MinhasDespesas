import { createContext, ReactNode, useEffect, useState } from 'react'

import toast from 'react-hot-toast'

import { auth, firebase } from '../services/firebase'

type User = {
    id: string,
    name: string,
    profile: string | null
}

type AuthContextType = {
    user: User | undefined;
    checking: boolean;
    signIn: () => Promise<void>;
    signOut: () => void;
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState<User>()
    const [checking, setChecking] = useState<boolean>(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if(user) {
                const { displayName, photoURL, uid } = user

                if(!displayName) {
                    toast.error('Sua conta não possui todos os dados necessários para fazer a autenticação.')
                    return
                }

                setUser({
                    id: uid,
                    name: displayName,
                    profile: photoURL
                })
            }

            setChecking(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    async function signIn() {
        const provider = new firebase.auth.GoogleAuthProvider()

        await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)

        const result = await auth.signInWithPopup(provider)

        if(result.user) {
            const { displayName, photoURL, uid } = result.user

            if(!displayName) {
                toast.error('Sua conta não possui todos os dados necessários para fazer a autenticação.')
                return
            }

            setUser({
                id: uid,
                name: displayName,
                profile: photoURL
            })
        }
    }

    function signOut() {
        if(user) {
            auth.signOut()

            setUser(undefined)
        }
    }

    return (
        <AuthContext.Provider value={{ user, checking, signIn, signOut }}>
            {props.children}
        </AuthContext.Provider>
    )
}
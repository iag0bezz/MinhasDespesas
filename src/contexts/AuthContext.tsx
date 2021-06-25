import { createContext, ReactNode, useEffect, useState } from 'react'

import toast from 'react-hot-toast'

import { auth, firebase } from '../services/firebase'

type User = {
    id: string;
    name: string;
}

type FormProps = {
    email: string;
    password: string;
}

type AuthContextType = {
    user: User | undefined;
    checking: boolean;
    signInWithGoogle: () => Promise<void>;
    signInWithForm: ({email, password}: FormProps) => Promise<void>;
    signOutWithForm: ({ email, password }: FormProps) => Promise<void>;
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
                const { displayName, email, uid } = user

                if(!displayName && !email) {
                    toast.error('Sua conta não possui todos os dados necessários para fazer a autenticação.')
                    return
                }

                setUser({
                    id: uid,
                    name: displayName ? displayName : email ? email : ''
                })
            }

            setChecking(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()

        await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)

        const result = await auth.signInWithPopup(provider)

        console.log(result.user)

        if(result.user) {
            const { displayName, uid } = result.user

            if(!displayName) {
                toast.error('Sua conta não possui todos os dados necessários para fazer a autenticação.')
                return
            }

            setUser({
                id: uid,
                name: displayName
            })
        }
    }

    async function signInWithForm({ email, password }: FormProps) {
        await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)

        const result = await auth.signInWithEmailAndPassword(email, password)

        if(result.user) {
            const { email, uid } = result.user

            if(!email) {
                toast.error('Sua conta não possui todos os dados necessários para fazer a autenticação.')
                return
            }

            setUser({
                id: uid,
                name: email
            })
        }
    }

    async function signOutWithForm({ email, password }: FormProps) {
        await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)

        const result = await auth.createUserWithEmailAndPassword(email, password)

        if(result.user) {
            const { email, uid } = result.user

            if(!email) {
                toast.error('Sua conta não possui todos os dados necessários para fazer a autenticação.')
                return
            }

            setUser({
                id: uid,
                name: email
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
        <AuthContext.Provider value={{ user, checking, signInWithGoogle, signInWithForm, signOutWithForm, signOut }}>
            {props.children}
        </AuthContext.Provider>
    )
}
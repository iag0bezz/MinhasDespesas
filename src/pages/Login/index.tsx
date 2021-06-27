import { useAuth } from '../../hooks/useAuth'
import { useHistory } from 'react-router-dom'

import {
    Container,
    Background,
    Main,
    Content,
    Button,
    Divider
} from './styles'

import {
    LoginForm,
    RegisterForm
} from '../../components'

import { Helmet } from 'react-helmet'

import Illustration from '../../assets/illustration.svg'
import GoogleIcon from '../../assets/google_icon.svg'
import { useState } from 'react'
import toast from 'react-hot-toast'

type FormProps = {
    email: string;
    password: string;
}

export default function Login() {
    const history = useHistory()
    const { user, signInWithForm, signOutWithForm, signInWithGoogle } = useAuth()

    const [login, setLogin] = useState(true)

    async function handleSignInWithGoogle() {
        if(!user) {
            await signInWithGoogle()
        }

        history.push('/dashboard')
    }

    async function handleSignInForm({ email, password }: FormProps) {
        if(!user) {
            await signInWithForm({email, password})
        }
        
        history.push('/dashboard')
    }

    async function handleSignOutForm({ email, password }: FormProps) {
        console.log(email, password)
        if(!user) {
            await signOutWithForm({ email, password })
        }

        history.push('/dashboard')
    }

    async function handleFormUpdate() {
        setLogin(!login)
    }

    return (
        <Container>
            <Helmet title="Minhas Despesas - Autenticação" />
            <Background>
                <div>
                    <img src={Illustration} alt="Illustration" />
                    <h1>Organize sua vida financeira</h1>
                    <h3>Gerencie, organize e controle toda sua vida financeira</h3>
                </div>
            </Background>
            <Main>
                <Content>
                    <Button onClick={() => toast.promise(handleSignInWithGoogle(), {
                        loading: 'Autenticando usuário...',
                        success: 'Autenticado com sucesso!',
                        error: 'Ocorreu uma falha na autenticação.'
                    })}>
                        <img src={GoogleIcon} alt="Google Icon" />
                        Acesse sua conta com o Google
                    </Button>

                    <Divider>
                        ou
                    </Divider>

                    {login 
                        ? 
                            <LoginForm handle={handleSignInForm} callback={handleFormUpdate} /> 
                        : 
                            <RegisterForm handle={handleSignOutForm} callback={handleFormUpdate} />}
                </Content>
            </Main>
        </Container>
    )
}
import { useAuth } from '../../hooks/useAuth'
import { useHistory } from 'react-router-dom'

import toast from 'react-hot-toast'

import {
    Container,
    Background,
    Main,
    Content,
    Picture,
    Button
} from './styles'

import { Helmet } from 'react-helmet'

import Illustration from '../../assets/illustration.svg'
import UnknownPicture from '../../assets/unknown_picture.svg'
import GoogleIcon from '../../assets/google_icon.svg'

export default function Login() {
    const history = useHistory()
    const { user, signIn, signOut } = useAuth()
    
    async function handleSignIn() {
        if(!user) {
            await signIn()
        }

        history.push('/dashboard')
    }

    return (
        <Container>
            <Helmet title="Minhas Despesas - Autenticação" />
            <Background>
                <img src={Illustration} alt="Illustration" />
                <h2>Faça a gestão de todas suas despesas</h2>
            </Background>
            <Main>
                <Content>
                    <Picture src={user && user.profile != null ? user.profile : UnknownPicture} />
                    {user ? <p>Autenticado como {user.name}, <span onClick={() => signOut()}>não é você?</span></p> : undefined}
                    <Button style={{ margin: user ? '' : '30px' }} onClick={() => {
                        toast.promise(handleSignIn(), {
                            loading: 'Autenticando usuário...',
                            success: <b>Autenticado com sucesso!</b>,
                            error: <b>Falha ao efetuar a autenticação.</b>
                        })
                    }}>
                        <img style={{ marginRight: 5 }} src={GoogleIcon} alt="Google Icon" />
                        Acesse sua conta com o Google
                    </Button>
                </Content>
            </Main>
        </Container>
    )
}
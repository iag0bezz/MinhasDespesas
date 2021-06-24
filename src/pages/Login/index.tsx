import React from 'react'

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
    return (
        <Container>
            <Helmet title="Minhas Despesas - Autenticação" />
            <Background>
                <img src={Illustration} alt="Illustration" />
                <h2>Faça a gestão de todas suas despesas</h2>
            </Background>
            <Main>
                <Content>
                    <Picture src={UnknownPicture} />
                    <p>Autenticado como FrachDev_, <span>não é você?</span></p>
                    <Button>
                        <img src={GoogleIcon} alt="Google Icon" />
                        Acesse sua conta com o Google
                    </Button>
                </Content>
            </Main>
        </Container>
    )
}
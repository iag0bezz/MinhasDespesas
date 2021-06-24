import React from 'react'

import {
    Container,
    Background,
    Main,
    ImageIllustration,
    IllustrationText
} from './styles'

import { Helmet } from 'react-helmet'

import Illustration from '../../assets/illustration.svg'

export default function Login() {
    return (
        <Container>
            <Helmet title="Minhas Despesas - Gerencie seu dinheiro" />
            <Background>
                <ImageIllustration src={Illustration} />
                <IllustrationText>Gerencia e controle todos seus gastos</IllustrationText>
            </Background>
            <Main>

            </Main>
        </Container>
    )
}
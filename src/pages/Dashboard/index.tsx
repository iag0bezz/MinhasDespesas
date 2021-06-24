import React from 'react'

import {
    NavBar
} from '../../components'

import {
    Container,
    TransactionContainer
} from './styles'

export default function Dashboard() {
    return (
        <>
            <NavBar />
            <Container>
                <TransactionContainer>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Tipo</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="title">Compra Mercadinho</td>
                                <td className="payment">
                                    R$ 34,09
                                </td>
                                <td>Pagamento</td>
                                <td>24/06/2021 às 20:05</td>
                            </tr>
                        </tbody>
                    </table>
                </TransactionContainer>
            </Container>
        </>
    )
}
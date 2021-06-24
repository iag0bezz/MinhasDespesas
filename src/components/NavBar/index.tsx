import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

import {
    Container,
    Header,
} from './styles'

export default function NavBar() {
    const { signOut } = useAuth()

    return (
        <Container>
            <Header>
                <p>Minhas Finanças</p>
                <nav>
                    <NavLink activeClassName="selected" to='/dashboard' exact>
                        Inicio
                    </NavLink>
                    <NavLink activeClassName="selected" to='/' exact onClick={() => signOut()}>
                        Sair
                    </NavLink>
                </nav>
            </Header>
        </Container>
    )
}
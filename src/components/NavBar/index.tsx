import { NavLink, useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

import {
    Container,
    Header,
} from './styles'

export default function NavBar() {
    const { signOut } = useAuth()
    const history = useHistory()

    return (
        <Container>
            <Header>
                <p onClick={() => history.push('/dashboard')}>Minhas Finanças</p>
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
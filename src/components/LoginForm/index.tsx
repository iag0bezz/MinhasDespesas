import { useState } from "react";
import toast from "react-hot-toast";

import {
    Container,
    Form
} from './styles'

type FormProps = {
    email: string;
    password: string;
}

type Props = {
    handle: ({ email, password }: FormProps) => Promise<void>;
    callback: () => void;
}

export default function LoginForm({ handle, callback }: Props) {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleLogin = (event: any) => {
        event.preventDefault()

        if(email.trim().length === 0 || !emailValidator.test(email.trim())) {
            toast.error('Você precisa informar um e-mail válido.')
            return
        }

        if(password.trim().length <= 4) {
            toast.error('Você precisa informar uma senha válida.')
            return
        }

        return toast.promise(handle({ email, password }), {
            loading: 'Autenticando usuário...',
            success: 'Autenticado com sucesso!',
            error: 'E-mail ou senha incorreto.'
        })
    }

    return (
        <Container>
            <Form>
                <input value={email} onChange={(event) => setEmail(event.target.value)} autoFocus type='email' placeholder='Seu endereço de e-mail' />
                <input value={password} onChange={(event) => setPassword(event.target.value)} type='password' placeholder='Insira sua senha' />
                <span>Não possui uma conta? <span onClick={() => callback()} className='register'>Registre-se agora</span></span>

                <button onClick={(event) => handleLogin(event)}>Autenticar</button>
            </Form>
        </Container>
    )
}
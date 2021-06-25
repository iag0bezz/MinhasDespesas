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

export default function RegisterForm({ handle, callback }: Props) {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    const emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleRegister = (event: any) => {
        event.preventDefault()

        if(email.trim().length === 0 || !emailValidator.test(email.trim())) {
            toast.error('Você precisa informar um e-mail válido.')
            return
        }

        if(password.length <= 4) {
            toast.error('Você precisa informar uma senha válida.')
            return
        }

        if(confirmPassword.length <= 4 && confirmPassword !== password) {
            toast.error('Suas senhas devem ser iguais.')
            return
        }

        return toast.promise(handle({ email, password }), {
            loading: 'Registrando usuário...',
            success: 'Registrado com sucesso!',
            error: 'Não foi possível criar sua conta.'
        })
    }

    return (
        <Container>
            <Form>
                <input value={email} onChange={(event) => setEmail(event.target.value)} autoFocus type='email' placeholder='Seu endereço de e-mail' />
                <input value={password} onChange={(event) => setPassword(event.target.value)} type='password' placeholder='Insira sua senha' />
                <input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type='password' placeholder='Insira novamente sua senha' />
                <span>Já possui uma conta? <span onClick={() => callback()} className='register'>Entre agora</span></span>

                <button onClick={(event) => handleRegister(event)}>Registrar</button>
            </Form>
        </Container>
    )
}
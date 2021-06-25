import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
        font-size: 14px;
        color: #a8a8b3;
        margin-top: 3px;

        .register {
            cursor: pointer;
            
            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9)
            }
        }
    }

    input {
        width: 300px;
        height: 50px;
        font-weight: 500;
        background: #fff;
        color: #29292e;
        border-radius: 8px;
        border: 1px solid #a8a8b3;
        cursor: text;

        padding: 0 16px;

        &:focus {
            outline: none;
            border: 1px solid black;
        }

        & + input {
            margin-top: 20px;
        }
    }

    button {
        margin-top: 20px;
        width: 100%;
        height: 50px;
        border-radius: 9px;
        border: 1px solid #a8a8b3;
        background: #835afd;
    
        color: #fff;
        font-weight: 600;

        cursor: pointer;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`
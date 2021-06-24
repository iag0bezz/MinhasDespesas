import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;

    flex-direction: column;
`

export const Background = styled.div`
    flex: 2;
    background-color: #835afd;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    img {
        max-width: 400px;
        opacity: 0.6;
    }

    h2 {
        color: #fff;
        margin-top: 100px;
    }
`

export const Main = styled.div`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    p {
        margin: 30px;
        font-size: 18px;
        span {
            color: #835afd;
            cursor: pointer;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9)
            }
        }
    }
`

export const Picture = styled.img`
    width: 150px;
    max-width: 150px;
    border-radius: 50%;
    margin-top: -45%;
    background: #fff;

    border: 5px solid #835afd;
`

export const Button = styled.button`
    width: 350px;
    height: 50px;
    font-weight: 600;
    background: transparent;
    color: #29292e;

    border-radius: 8px;
    border: 2px solid #835afd;

    transition: filter 0.2s;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${props => props ? '30px' : '0px'}

    img {
        margin-right: 8px;
    }

    &:hover {
        filter: brightness(0.9)
    }
`
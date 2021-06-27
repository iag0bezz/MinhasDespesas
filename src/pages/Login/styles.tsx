import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: stretch;
`

export const Background = styled.div`
    flex: 6;
    background-color: #835afd;

    display: flex;
    align-items: center;
    flex-direction: center;
    justify-content: left;

    padding: 120px 80px;

    div {
        img {
            max-width: 400px;
            opacity: 0.6;
        }

        h1 {
            color: #fff;
            padding-top: 25px;
            font-size: 28px;

            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        h3 {
            color: #fff;
            font-weight: normal;
        }
    }
`

export const Main = styled.div`
    flex: 8;

    padding: 0 32px;

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
`

export const Button = styled.button`
    width: 100%;
    height: 50px;
    font-weight: 600;
    background: #fff;
    color: #29292e;

    border-radius: 8px;
    border: 1px solid #a8a8b3;

    transition: filter 0.2s;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 10px;

    img {
        margin-right: 8px;
    }

    &:hover {
        filter: brightness(0.9)
    }
`

export const Divider = styled.span`
    color: #a8a8b3;
    margin-bottom: 10px;
    font-size: 14px;

    display: flex;
    align-items: center;
`
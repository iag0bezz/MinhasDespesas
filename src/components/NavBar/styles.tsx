import styled from "styled-components";

export const Container = styled.div`
    background: #835afd;
    width: 100%;

    .selected {
        border-bottom: 3px solid #ff872c;
    }
`

export const Header = styled.header`
    width: 1120px;
    margin: 0 auto;
    padding: 0 20px 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        color: #fff;
        font-size: 26px;
        text-decoration: none;
        font-weight: 600;

        cursor: pointer;

        transition: opacity 0.2s;

        &:hover {
            opacity: 0.6;
        }
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            
            transition: opacity 0.2s;

            & + a {
                margin-left: 32px;
            }

            &:hover {
                opacity: 0.6;

                border-bottom: 2px solid #ff872c;
            }
        }

        img {
            max-width: 32px;
            max-height: 32px;
            border-radius: 50%;
            margin-right: 7px;
        }
    }
`
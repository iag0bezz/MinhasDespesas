import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Background = styled.div`
    flex: 6;
    background: #835afd;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;
`

export const ImageIllustration = styled.img`
    max-width: 500px;
    max-height: 350px;
    padding-bottom: 120px;
`

export const IllustrationText = styled.p`
    font-size: 24px;
    color: #fff;
    line-height: 32px;
`

export const Main = styled.div`
    flex: 8;
    padding: 0 32px;
`
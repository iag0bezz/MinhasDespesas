import React from 'react'

import Routes from './routes'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    outline: 0;

    background-color: #f8f8f8;
  }

  body, input, button, textarea {
    font: 400 16px "Roboto", sans-serif;
  }
`

export default function App() {
  return (
    <>
      <Routes/>

      <GlobalStyle />
    </>
  );
}
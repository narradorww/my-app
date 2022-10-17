import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../styles/global'



function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Minha Página</title>
      <link rel= "shortcut icon" href= "/favicon.png" type= "image/png" />
      <meta name="description" content="A starter template to work with TypeScript, React, NextJS and Styled Components" />

    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}

export default App

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { myNewTheme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={myNewTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp

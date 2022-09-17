import {useEffect} from 'react'
import { ChakraProvider, Box, Center } from '@chakra-ui/react'
import '../styles/globals.css'
import { useRouter } from 'next/router'

import Search from './../components/Search'
import Navbar from './../components/Navbar'
import Toggle from './../components/Toggle'
import Menu from './../components/Menu'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return(
    <ChakraProvider>
      <Navbar />
      {
        router?.query?.ticker &&
        <Box>
          <Search />
          <Menu />
          <Toggle />
        </Box>
      }
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

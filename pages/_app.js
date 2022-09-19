import { ChakraProvider, Box } from '@chakra-ui/react'
import '../styles/globals.css'
import { useRouter } from 'next/router'

import Search from './../components/Search'
import Navbar from './../components/Navbar'
import Toggle from './../components/Toggle'
import Menu from './../components/Menu'
import ShortInfo from './../components/ShortInfo'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return(
    <ChakraProvider>
      <Navbar />
      {
        (router?.query?.ticker && !router.pathname.split('/').includes('overview')) &&
        <Box>
          <Search />
          <Menu />
          <ShortInfo />
          <Toggle />
        </Box>
      }

      {
        (router?.query?.ticker && router.pathname.split('/').includes('overview')) &&
        <Box>
          <Search />
          <Menu />
          <ShortInfo />
        </Box>
      }
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

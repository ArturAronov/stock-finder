import Head from 'next/head'
import { Center } from '@chakra-ui/react'

import Search from './../components/Search'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stock Finder App | Artur Aronov</title>
        <meta name="description" content="Stock Finder App | Artur Aronov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center h='60vh'>
        <Search />
      </Center>

    </div>
  )
}

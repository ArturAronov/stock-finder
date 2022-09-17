import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/react'

import Search from './../components/Search'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    console.log(router.query)

  }, [router])
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

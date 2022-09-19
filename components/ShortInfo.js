import { useState, useEffect } from 'react'
import useStockData from '../hooks/useStockData'
import { useRouter } from 'next/router'
import { Container, Center, Wrap, Text } from '@chakra-ui/react'

const ShortInfo = () => {
  const [ ticker, setTicker ] = useState()
  const { overview } = useStockData(ticker)
  const router = useRouter()

  useEffect(() => {
    if(router?.query?.ticker) {
      setTicker(router.query.ticker)
    }
  }, [router.query.ticker])

  return (
    <Container justify='center' my='3'>
      <Center>
        <Text fontSize='sm' fontWeight='semibold'>
          {`${overview?.Symbol} - ${overview?.Name}`}
        </Text>
      </Center>
      <Center>
        <Text fontSize='sm' fontWeight='semibold'>
          {overview?.Sector}
        </Text>
      </Center>
      <Center>
        <Text fontSize='sm' fontWeight='semibold'>
          {`CIK: ${overview?.CIK}`}
        </Text>
      </Center>
      <Center>
        <Text fontSize='sm' fontWeight='semibold'>
          {`Exchange: ${overview?.Exchange}`}
        </Text>
      </Center>
    </Container>
  )
}

export default ShortInfo

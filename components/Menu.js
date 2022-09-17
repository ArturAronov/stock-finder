import { useState, useEffect } from 'react'
import { Button, Wrap, Center } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Menu = () => {
  const [ path, setPath ] = useState([])
  const [ ticker, setTicker ] = useState()
  const router = useRouter()

  useEffect(() => {
    setTicker(router.query.ticker)
    setPath(router.pathname.split('/'))
  }, [router])
  return(
    <Center mt='3'>
      <Wrap justify='center'>
        <Button
          size='sm'
          colorScheme='facebook'
          variant='outline'
          borderRadius='none'
          onClick={() => router.push(`/${ticker}/overview`)}
          isDisabled={path.includes('overview')}
        >
          Overview
        </Button>
        <Button
          size='sm'
          colorScheme='facebook'
          variant='outline'
          borderRadius='none'
          onClick={() => router.push(`/${ticker}/balance-sheet`)}
          isDisabled={path.includes('balance-sheet')}
        >
          Balance Sheet
        </Button>
        <Button
          size='sm'
          colorScheme='facebook'
          variant='outline'
          borderRadius='none'
          onClick={() => router.push(`/${ticker}/income-statement`)}
          isDisabled={path.includes('income-statement')}
        >
          Income Statement</Button>
        <Button
          size='sm'
          colorScheme='facebook'
          variant='outline'
          borderRadius='none'
          onClick={() => router.push(`/${ticker}/cashflow`)}
          isDisabled={path.includes('cashflow')}
        >
          Cashflow
        </Button>
        <Button
          size='sm'
          colorScheme='facebook'
          variant='outline'
          borderRadius='none'
          onClick={() => router.push(`/${ticker}/earnings`)}
          isDisabled={path.includes('earnings')}
        >
          Earnings
        </Button>
        <Button
          size='sm'
          colorScheme='facebook'
          variant='outline'
          borderRadius='none'
          onClick={() => router.push(`/${ticker}/charts`)}
          isDisabled={path.includes('charts')}
        >
          Charts
        </Button>
      </Wrap>
    </Center>
  )
}

export default Menu

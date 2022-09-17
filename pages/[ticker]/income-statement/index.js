import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button, ButtonGroup } from '@chakra-ui/react'

import useStockData from '../../../hooks/useStockData'

const IncomeStatement = () => {
  const [ ticker, setTicker ] = useState('')
  const { incomeStatement } = useStockData(ticker)
  const router = useRouter()

  useEffect(() => {
    if(router?.query?.ticker) {
      setTicker(router.query.ticker)
      console.log(incomeStatement)
    }

    if(incomeStatement?.symbol) {
    console.log(router.query.ticker)
    }

  }, [incomeStatement, router])
  return(
    <>
      Income Statement
    </>
  )
}

export default IncomeStatement

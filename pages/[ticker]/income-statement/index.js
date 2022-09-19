import { useState, useEffect } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/react'

import Loading from '../../../media/loading.gif'

import { parseData } from '../../../utils/parseData'

import IncomeStatementLayout from '../../../layouts/IncomeStatementLayout'
import ErrorLayout from '../../../layouts/ErrorLayout'

import useStockData from '../../../hooks/useStockData'
import useToggleState from '../../../hooks/useToggleState'

const BalanceSheet = () => {
  const [ ticker, setTicker ] = useState()
  const [ dates, setDates ] = useState([])
  const [ incomeStatementState, setIncomeStatementState ] = useState([])
  const [ error, setError ] = useState(false)
  const [ layout, setLayout ] = useState()
  const { incomeStatement } = useStockData(ticker)
  const { toggle } = useToggleState()

  const router = useRouter()

  useEffect(() => {
    if(error) {
      setLayout(<ErrorLayout error={error} />)
    } else if(!error, incomeStatementState.length === 0){
      setLayout(<Image src={Loading} alt="my gif" height={50} width={50} />)
    } else {
      setLayout(<IncomeStatementLayout incomeStatementState={incomeStatementState} dates={dates} />)
    }
  }, [incomeStatementState, error])

  useEffect(() => {
    if(incomeStatement && incomeStatement?.error) {
      setError(incomeStatement.error)
    } else if(incomeStatement) {
      const parsedData = parseData(toggle, incomeStatement, 'annualReports', 'quarterlyReports')
      setIncomeStatementState(parsedData)
      setDates(parsedData)
    }

  }, [incomeStatement, toggle])

  useEffect(() => {
    setTicker(router.query.ticker)
  }, [router.query.ticker])

  return (
    <Center mt='10'>
      {
        layout
      }
    </Center>
  )
}

export default BalanceSheet

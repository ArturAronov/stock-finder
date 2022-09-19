import { useState, useEffect } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/react'

import Loading from '../../../media/loading.gif'

import { parseData } from '../../../utils/parseData'

import BalanceSheetLayout from '../../../layouts/BalanceSheetLayout'
import ErrorLayout from '../../../layouts/ErrorLayout'

import useStockData from '../../../hooks/useStockData'
import useToggleState from '../../../hooks/useToggleState'

const BalanceSheet = () => {
  const [ ticker, setTicker ] = useState()
  const [ dates, setDates ] = useState([])
  const [ balanceSheetState, setBalancesSheetState ] = useState([])
  const [ error, setError ] = useState(false)
  const [ layout, setLayout ] = useState()
  const { balanceSheet } = useStockData(ticker)
  const { toggle } = useToggleState()

  const router = useRouter()

  useEffect(() => {
    if(error) {
      setLayout(<ErrorLayout error={error} />)
    } else if(!error, balanceSheetState.length === 0){
      setLayout(<Image src={Loading} alt="my gif" height={50} width={50} />)
    } else {
      setLayout(<BalanceSheetLayout balanceSheetState={balanceSheetState} dates={dates} />)
    }
  }, [balanceSheetState, error])

  useEffect(() => {
    if(balanceSheet && balanceSheet?.error) {
      setError(balanceSheet.error)
    } else if(balanceSheet) {
      const parsedData = parseData(toggle, balanceSheet, 'annualReports', 'quarterlyReports')
      setBalancesSheetState(parsedData)
      setDates(parsedData)
    }

  }, [balanceSheet, toggle])

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

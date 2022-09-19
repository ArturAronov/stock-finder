import { useState, useEffect } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/react'

import Loading from '../../../media/loading.gif'

import { parseData } from '../../../utils/parseData'

import CashflowLayout from '../../../layouts/CashflowLayout'
import ErrorLayout from '../../../layouts/ErrorLayout'

import useStockData from '../../../hooks/useStockData'
import useToggleState from '../../../hooks/useToggleState'

const Cashflow = () => {
  const [ ticker, setTicker ] = useState()
  const [ dates, setDates ] = useState([])
  const [ cashflowState, setCashflowState ] = useState([])
  const [ balanceSheetState, setBalancesSheetState ] = useState([])
  const [ error, setError ] = useState(false)
  const [ layout, setLayout ] = useState()
  const { cashflow, balanceSheet } = useStockData(ticker)
  const { toggle } = useToggleState()

  const router = useRouter()

  useEffect(() => {
    if(error) {
      setLayout(<ErrorLayout error={error} />)
    } else if(!error, cashflowState.length === 0, balanceSheetState.length === 0){
      setLayout(<Image src={Loading} alt="my gif" height={50} width={50} />)
    } else {
      setLayout(<CashflowLayout cashflowState={cashflowState} balanceSheetState={balanceSheetState} dates={dates} />)
    }
  }, [cashflowState, balanceSheetState, error])

  useEffect(() => {
    if(cashflow && cashflow?.error) {
      setError(cashflow.error)
    } else if(cashflow) {
      const parsedData = parseData(toggle, cashflow, 'annualReports', 'quarterlyReports')
      setCashflowState(parsedData)
      setDates(parsedData)
    }

    if(balanceSheet && balanceSheet?.error) {
      setError(balanceSheet.error)
    } else if(balanceSheet) {
      const parsedData = parseData(toggle, balanceSheet, 'annualReports', 'quarterlyReports')
      setBalancesSheetState(parsedData)
      setDates(parsedData)
    }

  }, [cashflow, balanceSheet, toggle])

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

export default Cashflow

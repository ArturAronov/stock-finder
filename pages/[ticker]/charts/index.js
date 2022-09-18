/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import Loading from '../../../media/loading.gif'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/react'

import ErrorLayout from '../../../layouts/ErrorLayout'
import ChartsLayout from '../../../layouts/ChartsLayout'

import { parseData } from '../../../utils/parseData'

import useToggleState from '../../../hooks/useToggleState'
import useStockData from '../../../hooks/useStockData'

const Charts = () => {
  const [ ticker, setTicker ] = useState('')
  const [ incomeStatementState, setIncomeStatementState ] = useState([])
  const [ balanceSheetState, setBalanceSheetState ] = useState([])
  const [ cashflowState, setCashflowState ] = useState([])
  const [ error, setError ] = useState(null)
  const [ layout, setLayout ] = useState([])
  const { toggle } = useToggleState()
  const { incomeStatement, balanceSheet, cashflow } = useStockData(ticker)

  const router = useRouter()

  useEffect(() => {


    if(incomeStatementState.length === 0 &&
      balanceSheetState.length === 0 &&
      cashflowState.length === 0 &&
      !error) {
      setLayout(<Image src={Loading} alt="my gif" height={50} width={50} />)
    }

    if(incomeStatementState.length > 0 &&
      balanceSheetState.length > 0 &&
      cashflowState.length > 0) {
      setLayout(<ChartsLayout incomeStatementState={incomeStatementState} balanceSheetState={balanceSheetState} cashflowState={cashflowState} />)
    }

    if(error) {
      setLayout(<ErrorLayout error={error}/>)
    }
  }, [ incomeStatementState, balanceSheetState, cashflowState, error ])

  useEffect(() => {
    if(router?.query?.ticker && ticker === '') {
      setTicker(router.query.ticker)
    }

  }, [router.query.ticker])

  useEffect(() => {
    if(incomeStatement?.symbol) {
      const data = parseData(toggle, incomeStatement, 'annualReports', 'quarterlyReports')
      setIncomeStatementState(data)
    }

    if(balanceSheet?.symbol) {
      const data = parseData(toggle, balanceSheet, 'annualReports', 'quarterlyReports')
      setBalanceSheetState(data)
    }

    if(cashflow?.symbol) {
      const data = parseData(toggle, cashflow, 'annualReports', 'quarterlyReports')
      setCashflowState(data)
    }

    if(incomeStatement?.error && balanceSheet?.error && cashflow?.error) {
      setError(incomeStatement.error)
    }

  }, [toggle, incomeStatement, balanceSheet, cashflow])

  return (
    <Center mt='10'>
      { layout }
    </Center>
  )
}

export default Charts

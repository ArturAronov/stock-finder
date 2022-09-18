/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Wrap, Center } from '@chakra-ui/react'

import ChartItemDouble from '../../../components/ChartItemDouble'
import ChartItemSingle from '../../../components/ChartItemSingle'
import Error from '../../../layouts/Error'

import { parseData } from '../../../utils/parseData'

import useToggleState from '../../../hooks/useToggleState'
import useStockData from '../../../hooks/useStockData'

const Charts = () => {
  const [ ticker, setTicker ] = useState('')
  const [ incomeStatementState, setIncomeStatementState ] = useState([])
  const [ overviewState, setOverviewState ] = useState([])
  const [ balanceSheetState, setBalanceSheetState ] = useState([])
  const [ cashflowState, setCashflowState ] = useState([])
  const [ error, setError ] = useState(null)
  const [ layout, setLayout ] = useState([])
  const { toggle } = useToggleState()
  const { incomeStatement, overview, balanceSheet, cashflow } = useStockData(ticker)

  const router = useRouter()

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

    if(overview?.symbol) {
      const data = parseData(toggle, overview, 'annualReports', 'quarterlyReports')
      setOverviewState(data)
    }

    if(balanceSheet?.symbol) {
      const data = parseData(toggle, balanceSheet, 'annualReports', 'quarterlyReports')
      setBalanceSheetState(data)
    }

    if(cashflow?.symbol) {
      const data = parseData(toggle, cashflow, 'annualReports', 'quarterlyReports')
      setCashflowState(data)
    }
  }, [toggle, incomeStatement, overview, balanceSheet, cashflow])
  return (
    <Center mb='20'>
      <Wrap>
        <ChartItemDouble
          label1 = { 'Operating Cashflow' }
          data1 = { cashflowState }
          dataItem1 = { 'operatingCashflow' }
          label2 = { 'EBITDA'}
          data2 = { incomeStatementState }
          dataItem2 = { 'ebitda' }
        />

        <ChartItemDouble
            label1 = { 'Cash & Short Term Investments' }
            data1 = { balanceSheetState }
            dataItem1 = { 'cashAndShortTermInvestments' }
            label2 = { 'Total Debt' }
            data2 = { balanceSheetState }
            dataItem2 = { 'shortLongTermDebtTotal' }
          />

          <ChartItemDouble
          label1 = { 'Total Liabilities' }
          data1 = { balanceSheetState }
          dataItem1 = { 'totalLiabilities' }
          label2 = { 'Total Assets' }
          data2 = { balanceSheetState }
          dataItem2 = { 'totalAssets' }
        />

        <ChartItemSingle
          label = { 'Gross Profit' }
          data = { incomeStatementState }
          dataItem = { 'grossProfit' }
        />

        <ChartItemSingle
          label = { 'Total Revenue' }
          data = { incomeStatementState }
          dataItem = { 'totalRevenue' }
        />

        <ChartItemSingle
          label = { 'Research And Development' }
          data = { incomeStatementState }
          dataItem = { 'researchAndDevelopment' }
        />

        <ChartItemSingle
          label = { 'Operating Expenses' }
          data = { incomeStatementState }
          dataItem = { 'operatingExpenses' }
        />

        <ChartItemSingle
          label = { 'Net Income' }
          data = { incomeStatementState }
          dataItem = { 'netIncome' }
        />

        <ChartItemSingle
          label = { 'Capital Expenditures' }
          data = { cashflowState }
          dataItem = { 'capitalExpenditures' }
        />

        <ChartItemSingle
          label = { 'Dividend Payout' }
          data = { cashflowState }
          dataItem = { 'dividendPayout' }
        />

        <ChartItemSingle
          label = { 'Operating Cashflow' }
          data = { cashflowState }
          dataItem = { 'operatingCashflow' }
        />

        <ChartItemSingle
          label = { 'Inventory' }
          data = { balanceSheetState }
          dataItem = { 'inventory' }
        />

        <ChartItemSingle
          label = { 'Common Shares Outstanding' }
          data = { balanceSheetState }
          dataItem = { 'commonStockSharesOutstanding' }
        />


        <ChartItemSingle
          label = { 'Total Liabilities' }
          data = { balanceSheetState }
          dataItem = { 'totalLiabilities' }
        />

        <ChartItemSingle
          label = { 'Cash & Short Term Investments' }
          data = { balanceSheetState }
          dataItem = { 'cashAndShortTermInvestments' }
        />
      </Wrap>
    </Center>
  )
}

export default Charts

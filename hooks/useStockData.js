import useSWR from 'swr'
import axios from 'axios'

const useStockData = ticker => {
  const fetcher = url => axios.get(url).then((res) => {
    if(res?.data?.symbol) {
      return res.data
    } else {
      return {error: `No data available for ticker $${ticker.toUpperCase()}`}
    }
  })

  const { data: incomeStatement } = useSWR(
    ticker ? (`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${ticker}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`) : null, fetcher
  )

  const { data: overview } = useSWR(
    ticker ? (`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`) : null, fetcher
  )

  const { data: balanceSheet } = useSWR(
    ticker ? (`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${ticker}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`) : null, fetcher
  )

  const { data: cashflow } = useSWR(
    ticker ? (`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${ticker}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`) : null, fetcher
  )

  const { data: earnings } = useSWR(
    ticker ? (`https://www.alphavantage.co/query?function=EARNINGS&symbol=${ticker}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`) : null, fetcher
  )

  return {
    incomeStatement,
    overview,
    balanceSheet,
    cashflow,
    earnings
  }
}

export default useStockData

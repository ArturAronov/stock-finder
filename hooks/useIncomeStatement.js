import useSWR from 'swr'
import axios from 'axios'

const useIncomeStatement = ticker => {
  const { data: incomeStatement } = useSWR(
    ticker ? (`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${ticker}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`) : null,
    (key) => axios.get(key).then((res) => res.data)
  )

  return {
    incomeStatement,
  }
}

export default useIncomeStatement

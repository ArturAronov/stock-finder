import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/react'

import ErrorLayout from '../../../layouts/ErrorLayout'
import EarningsLayout from '../../../layouts/EarningsLayout'

import { parseData } from '../../../utils/parseData'

import useToggleState from '../../../hooks/useToggleState'
import useStockData from '../../../hooks/useStockData'

const TickerEarnings = () => {
  const [ ticker, setTicker ] = useState('')
  const [ data, setData ] = useState([])
  const [ error, setError ] = useState(null)
  const [ layout, setLayout ] = useState([])
  const { toggle } = useToggleState()
  const { earnings } = useStockData(ticker)
  const router = useRouter()

  useEffect(() => {
    let labels
    let reportedData
    let estimatedData

    if(error) {
      setLayout(<ErrorLayout error={error}/>)
    }

    if(earnings?.symbol) {
      labels = data.map(element => element.fiscalDateEnding)
      reportedData= data.map(element => element.reportedEPS)
      estimatedData = data.map(element => element.estimatedEPS)

      setLayout(<EarningsLayout labels={labels} reportedData={reportedData} estimatedData={estimatedData}/>)
    }

  }, [data, error])

  useEffect(() => {
    if(router?.query?.ticker) {
      setTicker(router.query.ticker)
    }

    if(earnings?.symbol) {
      const parsedData = parseData(toggle, earnings, 'annualEarnings', 'quarterlyEarnings')
      setData(parsedData)
    } else if(earnings?.error) {
      setError(earnings.error)
    }
  }, [router.query, toggle, earnings])
  return (
    <Center mt='10'>
      { layout }
    </Center>
  )
}

export default TickerEarnings

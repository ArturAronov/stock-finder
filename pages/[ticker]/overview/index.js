import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { Center } from '@chakra-ui/react'

import Loading from '../../../media/loading.gif'

import ErrorLayout from '../../../layouts/ErrorLayout'
import OverviewLayout from '../../../layouts/OverviewLayout'

import useStockData from '../../../hooks/useStockData'

const Overview = () => {
  const [ ticker, setTicker ] = useState()
  const [ error, setError ] = useState(false)
  const [ layout, setLayout ] = useState()
  const { overview } = useStockData(ticker)

  const router = useRouter()

  useEffect(() => {
    if(overview?.error) {
      setLayout(<ErrorLayout error={overview.error} />)
    }

    if(overview?.Symbol) {
      setLayout(<OverviewLayout overview={overview} />)
    }

  } ,[overview])

  useEffect(() => {
    setLayout(<Image src={Loading} alt="my gif" height={50} width={50} />)
    setTicker(router.query.ticker)
  }, [router.query.ticker])

  useEffect(() => {
    if(!error && !overview) {
      setLayout(<Image src={Loading} alt="my gif" height={50} width={50} />)
    }
  }, [])
  return (
    <Center mt='10'>
      { layout }
    </Center>
  )
}

export default Overview

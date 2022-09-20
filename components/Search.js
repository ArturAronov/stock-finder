/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import { Text, Input, Center, Button, Flex } from '@chakra-ui/react'
import router from 'next/router'
import axios from 'axios'

const Search = () => {
  const [ tickerInput, setTickerInput ] = useState()
  const [ tickers, setTickers ] = useState([])
  const [ searchResults, setSearchResults ] = useState('searchResultsHidden')

  const handleSubmit = e => {
    e.preventDefault()
    setTickerInput('')
    setSearchResults('searchResultsHidden')
    router.push(`/${tickerInput}/overview`)
  }

  const handleTickerClick = element => {
    setTickerInput('')
    setSearchResults('searchResultsHidden')
    router.push(`/${element}/overview`)
  }

  const handleInput = e => {
    e.stopPropagation()
    setTickerInput(e.target.value.trim())

    if(e.target.value.trim().length > 0) {
      setSearchResults('searchResultsVisible')
    } else {
      setSearchResults('searchResultsHidden')
    }
  }

  useEffect(() => {
    axios
      .get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${tickerInput}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then(res => {
        const rawData = res.data.bestMatches || []
        const filteredData = rawData.filter(element => {
          if(element['4. region'] === 'United States' && element['3. type'] === 'Equity') {
            return element
          }
        })
        setTickers(filteredData)

      })
  }, [tickerInput])

  return(
    <Center mt='10'>
      <div style={{position: 'relative'}}>
        <form onSubmit={e => handleSubmit(e)} >
          <Input placeholder='Enter Ticker' w='250px' value={tickerInput} size='md' borderRadius='none' onChange={e => handleInput(e)}  autoFocus={true}/>

        <Button borderRadius='none' variant='outline' type='submit' onClick={e => handleSubmit(e)} mb='4px'>
          Search
        </Button>
        </form>
        <div className={searchResults}>
          {
            tickers && tickers.map((element, index) => (
              <Flex fontSize='sm' _hover={{ background: "gray.200" }} key={index} onClick={() => handleTickerClick(element['1. symbol'])} p='1'>
                <Text fontWeight='semiBold'>{element['1. symbol']} </Text>
                <Text> - </Text>
                <Text noOfLines={1}>{element['2. name']}</Text>
              </Flex>
            ))
          }
        </div>
      </div>
    </Center>
  )
}

export default Search

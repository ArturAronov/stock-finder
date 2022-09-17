import { useState, useEffect } from 'react'
import { Input, Center, Button } from '@chakra-ui/react'
import router from 'next/router'

const Search = () => {
  const [ tickerInput, setTickerInput ] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    setTickerInput('')
    router.push(`/${tickerInput}/overview`)
  }

  const handleInput = e => {
    setTickerInput(e.target.value.trim())
  }

  return(
    <Center mt='10'>
      <form onSubmit={e => handleSubmit(e)}>
        <Input placeholder='Enter Ticker' w='250px' size='md' value={tickerInput} borderRadius='none' onChange={e => handleInput(e)}/>
      </form>
        <Button borderRadius='none' variant='outline' type='submit' onClick={e => handleSubmit(e)}>
          Search
        </Button>
    </Center>
  )
}

export default Search

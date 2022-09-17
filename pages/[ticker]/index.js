import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const StockInfo = ({stock}) => {
  // const { query: {slug}, replace } = useRouter()
  const router = useRouter()
  return(
    <>
      {console.log(router.query)}
    </>
  )
}

export default StockInfo

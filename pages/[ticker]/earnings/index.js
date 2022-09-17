import { useEffect } from 'react'
import { useRouter } from 'next/router'

const TickerEarnings = () => {
  const router = useRouter()

  useEffect(() => {
  }, [router.query])
  return (
    <>
    {/* {console.log(router.query)} */}
      Earnings
    </>
  )
}

export default TickerEarnings

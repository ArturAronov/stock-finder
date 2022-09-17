import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Custom404 = () => {
  const router = useRouter()

  useEffect(() => {
    router.push(`/`)
  }, [])
  return(
    <>
    </>
  )
}

export default Custom404

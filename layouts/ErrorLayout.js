import { Box, Center } from '@chakra-ui/react'

const ErrorLayout = props => {
  return (
    <Box mt='10' color='red'>
      <Center>
        { props.error }
      </Center>
    </Box>
  )
}

export default ErrorLayout

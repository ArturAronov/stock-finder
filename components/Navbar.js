import router from 'next/router'
import { Flex, Spacer, Center, Button, Text } from '@chakra-ui/react'

const Navbar = () => {
  return(
    <Flex boxShadow='lg' alignItems="center" bg='gray.300'>
      <Center alignItems="center">
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontWeight='bold'
          fontSize='2xl'
          // color='gray.900'
          ml='2'
          className='cursor'
          onClick={() => router.push('/')}
        >
          Stock Finder
        </Text>
      </Center>
      <Spacer />
      <Center>
        <Button size='lg' borderRadius='none' variant='ghost' colorScheme='blackAlpha' color='black' fontWeight='normal' onClick={() => router.push('/')}>
          Find Stock
        </Button>
        <Button size='lg' borderRadius='none' variant='ghost' colorScheme='blackAlpha' color='black' fontWeight='normal' mr='4' onClick={() => router.push('/about')}>
          About
        </Button>
      </Center>
    </Flex>
  )
}

export default Navbar

import useToggleState from './../hooks/useToggleState'
import { Switch, FormLabel, Flex, Center } from '@chakra-ui/react'

const Toggle = () => {
  const { toggle, mutateToggle } = useToggleState()
  return (
    <Center mt='3'>
      <Flex>
        <FormLabel htmlFor='toggle' paddingRight={'2'} margin={'0'}>Annual</FormLabel>
        <Switch id='toggle' size='md' isChecked={toggle} onChange={() => toggle ? mutateToggle(false) : mutateToggle(true)}/>
        <FormLabel htmlFor='toggle' paddingLeft={'2'} margin={'0'}>Quarterly</FormLabel>
      </Flex>
    </Center>
  )
}

export default Toggle

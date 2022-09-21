import { Box, UnorderedList, ListItem, Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
const About = () => {
  return(
    <Box py='8' px='6'>
      <Text fontSize='2xl'>About the Stock Finder App</Text>
      <Text>This website was created by Artur Aronov, for purpose to practice the following stack:</Text>

      <UnorderedList>
        <ListItem>NextJS</ListItem>
        <ListItem>S.W.R.</ListItem>
        <ListItem>Stock market API (Alpha Vantage)</ListItem>
        <ListItem>Chakra UI</ListItem>
        <ListItem>ChartJS</ListItem>
        <ListItem>Vercel (deployment)</ListItem>
      </UnorderedList>

      <Text mt='8'>Socials</Text>
      <UnorderedList>
        <ListItem>
          <Link href='https://www.linkedin.com/in/artaro/' isExternal>
            Linked In <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Link href='https://github.com/ArturAronov/stock-finder' isExternal>
            Github Repo <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Link href='http://www.artur.hk' isExternal>
            Personal Portfolio <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  )
}

export default About

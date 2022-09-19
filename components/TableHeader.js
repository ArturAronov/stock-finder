import { Thead, Tr, Th } from '@chakra-ui/react'

const TableHeader = props => {
  return(
    <Thead>
      <Tr>
        <Th></Th>
        {
          props.data.map((element, index) => (
            <Th key={index} textAlign="center"> { element.fiscalDateEnding } </Th>
          ))
        }
      </Tr>
    </Thead>
  )
}

export default TableHeader

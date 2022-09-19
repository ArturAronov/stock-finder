import { Tfoot, Tr, Th } from '@chakra-ui/react'

const TableFooter = props => {
  return(
    <Tfoot>
      <Tr>
        <Th></Th>
        {
          props.data &&
          props.data.map((element, index) => (
            <Th key={index} textAlign="center"> { element.fiscalDateEnding } </Th>
          ))
        }
      </Tr>
    </Tfoot>
  )
}

export default TableFooter

import { Tr, Td } from '@chakra-ui/react'

const TableRow = props => {
  return(
    <Tr>
      <Td fontSize='12' m='0' p='0' pl='2' position="sticky" top={0} zIndex="docked"> { props.label } </Td>
      {
        props.data &&
        props.data.map((element, index) => {
          const result = new Intl.NumberFormat().format(element[props.dataType])
          return (<Td key={index} textAlign="center" fontSize='12'>
            {
              isNaN(parseInt(element[props.dataType])) ? ' ' : result
            }
          </Td>)
        })
      }
    </Tr>
  )
}

export default TableRow

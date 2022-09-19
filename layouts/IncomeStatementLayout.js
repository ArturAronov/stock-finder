import { Table, Tbody, TableContainer } from '@chakra-ui/react'

import TableFooter from '../components/TableFooter'
import TableHeader from '../components/TableHeader'
import TableRow from '../components/TableRow'

const IncomeStatementLayout = props => {
  const {
    incomeStatementState,
    dates
  } = props

  return (
    <TableContainer w='full'>
      <Table size='sm' variant='striped' maxWidth='100%' whiteSpace='nowrap'>
        <TableHeader data={dates} />
        <Tbody>
          <TableRow label={'Gross Profit'} data={incomeStatementState} dataType={'grossProfit'} />
          <TableRow label={'- Total Revenue'} data={incomeStatementState} dataType={'totalRevenue'} />
          <TableRow label={'- Cost of Revenue'} data={incomeStatementState} dataType={'costOfRevenue'} />
          <TableRow label={'Operating Expenses'} data={incomeStatementState} dataType={'operatingExpenses'} />
          <TableRow label={'- Selling, General & Administrative'} data={incomeStatementState} dataType={'sellingGeneralAndAdministrative'} />
          <TableRow label={'- Research & Development'} data={incomeStatementState} dataType={'researchAndDevelopment'} />
          <TableRow label={''} data={incomeStatementState} dataType={''} />
          <TableRow label={'Interest Expense'} data={incomeStatementState} dataType={'interestExpense'} />
          <TableRow label={'Interest Income'} data={incomeStatementState} dataType={'interestIncome'} />
          <TableRow label={'Income Before Tax'} data={incomeStatementState} dataType={'incomeBeforeTax'} />
          <TableRow label={'Net Income'} data={incomeStatementState} dataType={'netIncome'} />
          <TableRow label={''} data={incomeStatementState} dataType={''} />
          <TableRow label={'EBIT'} data={incomeStatementState} dataType={'ebit'} />
          <TableRow label={'EBITDA'} data={incomeStatementState} dataType={'ebitda'} />
        </Tbody>
        <TableFooter data={dates} />
      </Table>
    </TableContainer>
  )
}

export default IncomeStatementLayout

import {
  Table,
  Tbody,
  TableContainer,
} from '@chakra-ui/react'

import TableFooter from '../components/TableFooter'
import TableHeader from '../components/TableHeader'
import TableRow from '../components/TableRow'

const CashflowLayout = props => {
  const {
    cashflowState,
    balanceSheetState,
    dates
  } = props
  return (
    <TableContainer w='full'>
      <Table size='sm' variant='striped' maxWidth='100%' whiteSpace='nowrap'>
        <TableHeader data={dates} />
        <Tbody>
          <TableRow label={'Operating Cashflow'} data={cashflowState} dataType={'operatingCashflow'} />
          <TableRow label={'- Net Income'} data={cashflowState} dataType={'netIncome'} />
          <TableRow label={'- Depreciation & Amortization'} data={cashflowState} dataType={'depreciationDepletionAndAmortization'} />
          <TableRow label={'Investing Cash Flow'} data={cashflowState} dataType={'cashflowFromInvestment'} />
          <TableRow label={''} data={cashflowState} dataType={''} />
          <TableRow label={'Investing Cash Flow'} data={cashflowState} dataType={'cashflowFromInvestment'} />
          <TableRow label={'Financing Cash Flow'} data={cashflowState} dataType={'cashflowFromFinancing'} />
          <TableRow label={''} data={cashflowState} dataType={''} />
          <TableRow label={'End Cash Position'} data={balanceSheetState} dataType={'cashAndCashEquivalentsAtCarryingValue'} />
          <TableRow label={'- Changes in Cash'} data={cashflowState} dataType={'changeInCashAndCashEquivalents'} />
          <TableRow label={''} data={cashflowState} dataType={''} />
          <TableRow label={'Capital Expenditures'} data={cashflowState} dataType={'capitalExpenditures'} />
          <TableRow label={'Proceeds from Share Issuance'} data={cashflowState} dataType={'proceedsFromIssuanceOfCommonStock'} />
          <TableRow label={'Proceeds from Dept Issuance'} data={cashflowState} dataType={'proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet'} />
          <TableRow label={'Repurchase of Shares'} data={cashflowState} dataType={'paymentsForRepurchaseOfEquity'} />
        </Tbody>
        <TableFooter data={dates} />
      </Table>
    </TableContainer>
  )
}

export default CashflowLayout

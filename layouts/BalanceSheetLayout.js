import {
  Table,
  Tbody,
  TableContainer,
} from '@chakra-ui/react'

import TableFooter from '../components/TableFooter'
import TableHeader from '../components/TableHeader'
import TableRow from '../components/TableRow'

const BalanceSheetLayout = props => {
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
          <TableRow label={'Total Assets'} data={balanceSheetState} dataType={'totalAssets'} />
          <TableRow label={'- Current Assets'} data={balanceSheetState} dataType={'totalCurrentAssets'} />
          <TableRow label={'-- Cash & Short Term Investments'} data={balanceSheetState} dataType={'cashAndShortTermInvestments'} />
          <TableRow label={'-- Receivables'} data={balanceSheetState} dataType={'currentNetReceivables'} />
          <TableRow label={'-- Inventory'} data={balanceSheetState} dataType={'inventory'} />
          <TableRow label={'-- Other CurrentAssets'} data={balanceSheetState} dataType={'otherCurrentAssets'} />
          <TableRow label={'- Non-CurrentAssets'} data={balanceSheetState} dataType={'totalNonCurrentAssets'} />
          <TableRow label={''} data={cashflowState} dataType={''} />
          <TableRow label={'Total Liabilities'} data={balanceSheetState} dataType={'totalLiabilities'} />
          <TableRow label={'- Current Liabilities'} data={balanceSheetState} dataType={'totalCurrentLiabilities'} />
          <TableRow label={'- Non-Current Liabilities'} data={balanceSheetState} dataType={'totalNonCurrentLiabilities'} />
          <TableRow label={'-- Long Term Debt'} data={balanceSheetState} dataType={'longTermDebtNoncurrent'} />
          <TableRow label={''} data={cashflowState} dataType={''} />
          <TableRow label={'Total Shareholder Equity'} data={balanceSheetState} dataType={'totalShareholderEquity'} />
          <TableRow label={'- CommonStock'} data={balanceSheetState} dataType={'commonStock'} />
          <TableRow label={'- Retained Earnings'} data={balanceSheetState} dataType={'retainedEarnings'} />
          <TableRow label={''} data={cashflowState} dataType={''} />
          <TableRow label={'Common Stock Equity'} data={balanceSheetState} dataType={'totalShareholderEquity'} />
          <TableRow label={''} data={cashflowState} dataType={''} />
          <TableRow label={'Common Shares Outstanding'} data={balanceSheetState} dataType={'commonStockSharesOutstanding'} />
          <TableRow label={''} data={cashflowState} dataType={''} />
          <TableRow label={'Current Debt'} data={balanceSheetState} dataType={'currentDebt'} />
        </Tbody>
        <TableFooter data={dates} />
      </Table>
    </TableContainer>
  )
}

export default BalanceSheetLayout

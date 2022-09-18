import { Wrap } from '@chakra-ui/react'

import ChartItemDouble from '../components/ChartItemDouble'
import ChartItemSingle from '../components/ChartItemSingle'

const ChartsLayout = props => {
  return (
    <Wrap justify='center' mb='20'>
      <ChartItemDouble
        label1 = { 'Operating Cashflow' }
        data1 = { props.cashflowState }
        dataItem1 = { 'operatingCashflow' }
        label2 = { 'EBITDA'}
        data2 = { props.incomeStatementState }
        dataItem2 = { 'ebitda' }
      />

      <ChartItemDouble
          label1 = { 'Cash & Short Term Investments' }
          data1 = { props.balanceSheetState }
          dataItem1 = { 'cashAndShortTermInvestments' }
          label2 = { 'Total Debt' }
          data2 = { props.balanceSheetState }
          dataItem2 = { 'shortLongTermDebtTotal' }
        />

        <ChartItemDouble
        label1 = { 'Total Liabilities' }
        data1 = { props.balanceSheetState }
        dataItem1 = { 'totalLiabilities' }
        label2 = { 'Total Assets' }
        data2 = { props.balanceSheetState }
        dataItem2 = { 'totalAssets' }
      />

      <ChartItemSingle
        label = { 'Gross Profit' }
        data = { props.incomeStatementState }
        dataItem = { 'grossProfit' }
      />

      <ChartItemSingle
        label = { 'Total Revenue' }
        data = { props.incomeStatementState }
        dataItem = { 'totalRevenue' }
      />

      <ChartItemSingle
        label = { 'Research And Development' }
        data = { props.incomeStatementState }
        dataItem = { 'researchAndDevelopment' }
      />

      <ChartItemSingle
        label = { 'Operating Expenses' }
        data = { props.incomeStatementState }
        dataItem = { 'operatingExpenses' }
      />

      <ChartItemSingle
        label = { 'Net Income' }
        data = { props.incomeStatementState }
        dataItem = { 'netIncome' }
      />

      <ChartItemSingle
        label = { 'Capital Expenditures' }
        data = { props.cashflowState }
        dataItem = { 'capitalExpenditures' }
      />

      <ChartItemSingle
        label = { 'Dividend Payout' }
        data = { props.cashflowState }
        dataItem = { 'dividendPayout' }
      />

      <ChartItemSingle
        label = { 'Operating Cashflow' }
        data = { props.cashflowState }
        dataItem = { 'operatingCashflow' }
      />

      <ChartItemSingle
        label = { 'Inventory' }
        data = { props.balanceSheetState }
        dataItem = { 'inventory' }
      />

      <ChartItemSingle
        label = { 'Common Shares Outstanding' }
        data = { props.balanceSheetState }
        dataItem = { 'commonStockSharesOutstanding' }
      />


      <ChartItemSingle
        label = { 'Total Liabilities' }
        data = { props.balanceSheetState }
        dataItem = { 'totalLiabilities' }
      />

      <ChartItemSingle
        label = { 'Cash & Short Term Investments' }
        data = { props.balanceSheetState }
        dataItem = { 'cashAndShortTermInvestments' }
      />
    </Wrap>
  )
}

export default ChartsLayout

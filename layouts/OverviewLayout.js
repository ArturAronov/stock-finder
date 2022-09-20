import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Box,
  Wrap,
  Divider,
} from '@chakra-ui/react'

const OverviewLayout = props => {
  return(
    <Wrap mx='5' mb='10' justify='center'>
      <Box borderWidth='1px' borderRadius='lg' p='3'  align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>PE Ratio</StatLabel>
          <StatNumber>{props.overview?.PERatio}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3'  align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Forward PE</StatLabel>
          <StatNumber>{props.overview?.ForwardPE}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3'  align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>EPS</StatLabel>
          <StatNumber>{props.overview?.EPS}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Diluted EPS</StatLabel>
          <StatNumber>{props.overview?.DilutedEPSTTM}</StatNumber>
          <StatHelpText fontSize='12'>Trailing Twelve Months</StatHelpText>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Enterprise Value to EBITDA</StatLabel>
          <StatNumber>{props.overview?.EVToEBITDA}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Enterprise Value to Revenue</StatLabel>
          <StatNumber>{props.overview?.EVToRevenue}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Price/Earnings to Growth</StatLabel>
          <StatNumber>{props.overview?.PEGRatio}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Price To Book Ratio</StatLabel>
          <StatNumber>{props.overview?.PriceToBookRatio}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Price To Sales Ratio</StatLabel>
          <StatNumber>{props.overview?.PriceToSalesRatioTTM}</StatNumber>
          <StatHelpText fontSize='12'>Trailing Twelve Months</StatHelpText>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Book Value</StatLabel>
          <StatNumber>{props.overview?.BookValue}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Return On Assets</StatLabel>
          <StatNumber>{props.overview?.ReturnOnAssetsTTM && Number(props.overview?.ReturnOnAssetsTTM*100).toFixed(2)+'%'}</StatNumber>
          <StatHelpText fontSize='12'>Trailing Twelve Months</StatHelpText>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Return On Equity</StatLabel>
          <StatNumber>{props.overview?.ReturnOnEquityTTM && Number(props.overview?.ReturnOnEquityTTM*100).toFixed(2)+'%'}</StatNumber>
          <StatHelpText fontSize='12'>Trailing Twelve Months</StatHelpText>
        </Stat>
      </Box>

      <Divider orientation='horizontal' />

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Revenue</StatLabel>
          <StatNumber>{props.overview?.RevenueTTM && new Intl.NumberFormat('en', { notation: "compact", style: 'currency', currency: "USD" }).format(props.overview.RevenueTTM)}</StatNumber>
          <StatHelpText fontSize='12'>Trailing Twelve Months</StatHelpText>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Revenue Per Share</StatLabel>
          <StatNumber>{props.overview?.RevenuePerShareTTM && new Intl.NumberFormat('en', { style: 'currency', currency: "USD" }).format(props.overview.RevenuePerShareTTM)}</StatNumber>
          <StatHelpText fontSize='12'>Trailing Twelve Months</StatHelpText>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Gross Profit</StatLabel>
          <StatNumber>{props.overview?.GrossProfitTTM && new Intl.NumberFormat('en', { notation: "compact", style: 'currency', currency: "USD" }).format(props.overview.GrossProfitTTM)}</StatNumber>
          <StatHelpText fontSize='12'>Trailing Twelve Months</StatHelpText>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>EBITDA</StatLabel>
          <StatNumber>{props.overview?.EBITDA && new Intl.NumberFormat('en', { notation: "compact", style: 'currency', currency: "USD" }).format(props.overview.EBITDA)}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>QoQ Earnings Growth</StatLabel>
          <StatNumber>{props.overview?.QuarterlyEarningsGrowthYOY && Number(props.overview?.QuarterlyEarningsGrowthYOY*100).toFixed(2)+'%'}</StatNumber>
          <StatHelpText fontSize='12'>Year Over Year</StatHelpText>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Profit Margin</StatLabel>
          <StatNumber>{props.overview?.ProfitMargin && Number(props.overview?.ProfitMargin*100).toFixed(2)+'%'}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Operating Margin</StatLabel>
          <StatNumber>{props.overview?.OperatingMarginTTM && Number(props.overview?.OperatingMarginTTM*100).toFixed(2)+'%'}</StatNumber>
          <StatHelpText fontSize='12'>Trailing Twelve Months</StatHelpText>
        </Stat>
      </Box>

      <Divider orientation='horizontal' />

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Market Capitalization</StatLabel>
          <StatNumber>{props.overview?.MarketCapitalization && new Intl.NumberFormat('en', { notation: "compact", style: 'currency', currency: "USD" }).format(props.overview.MarketCapitalization)}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Shares Outstanding</StatLabel>
          <StatNumber>{props.overview?.SharesOutstanding && new Intl.NumberFormat('en', { notation: "compact" }).format(props.overview.SharesOutstanding)}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Beta</StatLabel>
          <StatNumber>{props.overview?.Beta}</StatNumber>
        </Stat>
      </Box>

      <Divider orientation='horizontal' />

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Ex Dividend Date</StatLabel>
          <StatNumber>{props.overview?.ExDividendDate}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Dividend Yield</StatLabel>
          <StatNumber>{props.overview?.DividendYield && Number(props.overview?.DividendYield*100).toFixed(2)+'%'}</StatNumber>
          <StatHelpText fontSize='12'>Trailing Twelve Months</StatHelpText>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Dividend Per Share</StatLabel>
          <StatNumber>{props.overview?.DividendPerShare && new Intl.NumberFormat('en', { style: 'currency', currency: "USD" }).format(props.overview.DividendPerShare)}</StatNumber>
        </Stat>
      </Box>

      <Divider orientation='horizontal' />

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>Analyst Target Price</StatLabel>
          <StatNumber>{props.overview?.AnalystTargetPrice && new Intl.NumberFormat('en', { style: 'currency', currency: "USD" }).format(props.overview.AnalystTargetPrice)}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>52 Week High</StatLabel>
          <StatNumber>{props.overview?.['52WeekHigh'] && new Intl.NumberFormat('en', { style: 'currency', currency: "USD" }).format(props.overview['52WeekHigh'])}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>52 Week Low</StatLabel>
          <StatNumber>{props.overview?.['52WeekLow'] && new Intl.NumberFormat('en', { style: 'currency', currency: "USD" }).format(props.overview['52WeekLow'])}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>50 Day Moving Average</StatLabel>
          <StatNumber>{props.overview?.['50DayMovingAverage'] && new Intl.NumberFormat('en', { style: 'currency', currency: "USD" }).format(props.overview['50DayMovingAverage'])}</StatNumber>
        </Stat>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p='3' align='center' w='44' h='28' _hover={{ background: "gray.100" }}>
        <Stat>
          <StatLabel>200 Day Moving Averagee</StatLabel>
          <StatNumber>{props.overview?.['200DayMovingAverage'] && new Intl.NumberFormat('en', { style: 'currency', currency: "USD" }).format(props.overview['200DayMovingAverage'])}</StatNumber>
        </Stat>
      </Box>

    </Wrap>
  )
}

export default OverviewLayout

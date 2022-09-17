import { Container } from '@chakra-ui/react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2'

const Earnings = props => {
  return(
    <Container maxWidth='888px' mt='10'>
      <Chart
        data={{
          datasets: [{
            type: 'line',
            label: 'Estimated Earnings',
            // data: props.estimatedData,
            data: ['1', '2', '3', '4', '5'],
            borderColor: 'rgba(255, 99, 132, 1)',
          },
          {
            type: 'bar',
            label: 'Reported Earnings',
            // data: props.reportedData,
            data: ['1', '2', '3', '4', '5'],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
          // labels: props.labels,
          labels: ['1', '2', '3', '4', '5'],
        }}
        style={{maxWidth: '98%'}}
      />
    </Container>
  )
}

export default Earnings

import { Container } from '@chakra-ui/react'
import { Chart as ChartJS, defaults } from 'chart.js';
import { Chart } from 'react-chartjs-2'

const Earnings = props => {
  return(
    <Container maxWidth='888px' mt='10'>
      <Chart
        data={{
          datasets: [{
            type: 'line',
            label: 'Estimated Earnings',
            data: props.estimatedData,
            borderColor: 'rgba(255, 99, 132, 1)',
            pointStyle: 'dot',
            borderWidth: 3
          },
          {
            type: 'bar',
            label: 'Reported Earnings',
            data: props.reportedData,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
          labels: props.labels,
        }}
        style={{maxWidth: '98%'}}
      />
    </Container>
  )
}

export default Earnings

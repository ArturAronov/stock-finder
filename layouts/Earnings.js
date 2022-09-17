import { Container } from '@chakra-ui/react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2'

const lol = ['1', '2', '3', '4', '5']
const lolz = ['1', '2', '3', '4', '5']
const lolzz = ['1', '2', '3', '4', '5']

const Earnings = props => {
  return(
    <Container maxWidth='888px' mt='10'>
      <Chart
        data={{
          labels: lolzz,
          datasets: [{
            type: 'line',
            label: 'Estimated Earnings',
            data: lol,
            borderColor: 'rgba(255, 99, 132, 1)',
            pointStyle: 'dot',
            borderWidth: 3
          },
          {
            type: 'bar',
            label: 'Reported Earnings',
            data: lolz,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
        }}
        style={{maxWidth: '98%'}}
      />
    </Container>
  )
}

export default Earnings

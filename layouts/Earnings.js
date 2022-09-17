import { Container } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement)

const labels = ['1', '2', '3', '4', '5', '6']
const data = {
  labels: labels,
  datasets: [{
    label: 'dataset',
    data: [65, 59, 83, 89, 76, 55, 40],
    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
    borderColor: ['rgba(53, 162, 235, 0.5)'],
    borderWidth: 1
  }]
};

const Earnings = props => {


  return(
    <Container maxWidth='888px' mt='10'>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false
        }}
      />
    </Container>
  )
}

export default Earnings




/*
import { Container } from '@chakra-ui/react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2'

const Earnings = props => {
  return(
    <Container maxWidth='888px' mt='10'>
      <Chart
        data={{
          labels: props.labels,
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
        }}
        style={{maxWidth: '98%'}}
      />
    </Container>
  )
}

export default Earnings

*/

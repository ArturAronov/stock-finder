import { Container } from '@chakra-ui/react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,3,5,6,7,8],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1,2,3,5,6,7,8],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Earnings = props => {
  return(
    <Container maxWidth='888px' mt='10'>
      <Bar options={options} data={data} />
    </Container>
  )
}

export default Earnings



/*
import { Container } from '@chakra-ui/react'
import { Chart as ChartJS} from 'chart.js';
// import { Chart } from 'react-chartjs-2'
ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

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

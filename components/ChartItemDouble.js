import { useState, useEffect } from 'react'
import { Container } from '@chakra-ui/react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


const ChartItemDouble = props => {
  const [ dates, setDates ] = useState([])
  const [ data1Arr, setData1Arr ] = useState([])
  const [ data2Arr, setData2Arr ] = useState([])

  useEffect(() => {
    setDates(props.data1.map(element => element.fiscalDateEnding))
    setData1Arr(props.data1.map(element => element[props.dataItem1]))
    setData2Arr(props.data2.map(element => element[props.dataItem2]))

  }, [props.data1, props.data2])

  return(
    <Container maxWidth='500px' pt='10'>
      <Chart
        data={{
          labels: dates,
          datasets: [
            {
              type: 'bar',
              label: props.label1,
              data: data1Arr,
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
              type: 'line',
              label: props.label2 ? props.label2 : '',
              data: data2Arr,
              borderColor: 'rgba(255, 99, 132, 1)',
              pointStyle: 'dot',
              borderWidth: 2
            }
          ],
        }}
      />
    </Container>
  );
};

export default ChartItemDouble;

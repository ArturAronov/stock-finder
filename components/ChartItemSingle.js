import { useState, useEffect } from 'react'
import { Container } from '@chakra-ui/react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const ChartItemSingle = props => {
  const [ dates, setDates ] = useState([])
  const [ dataArr, setDataArr ] = useState([])

  useEffect(() => {
    setDates(props.data.map(element => element.fiscalDateEnding))
    setDataArr(props.data.map(element => element[props.dataItem]))

  }, [props.data])

  return(
    <Container maxWidth='500px' pt='10'>
      <Chart
        data={{
          labels: dates,
          datasets: [
            {
              type: 'bar',
              label: props.label,
              data: dataArr,
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        }}
      />
    </Container>
  );
}

export default ChartItemSingle

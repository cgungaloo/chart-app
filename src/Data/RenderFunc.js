import React, {Component} from 'react'
import { Chart } from 'react-charts'

function ChartRender(props){

  const min = 1;
  const max = 100;
  var current_value=10;

  function randomNum(){
    return min + Math.random() * (max - min);
  }

  function getNum(){
    console.log(props.interest_rate);
    return props.interest_rate;
  }

  function calculate_compound_value(){
    current_value = current_value + (current_value * props.interest_rate);
    console.log(current_value);
    return current_value;
  }

  function changeHandler(value) {
    this.chart.update();
  }

  React.useEffect(() => {
    console.log(props.interest_rate);
  });

  const datarand =(
    () => [[0, getNum()], [1, randomNum()], [2, randomNum()], [3, randomNum()], [4, randomNum()]]
  )

  const compundValues =(
    () => [[0, calculate_compound_value()], [1, calculate_compound_value()], [2, calculate_compound_value()], [3, calculate_compound_value()], [4, calculate_compound_value()]]
  )

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: compundValues()
      },
      {
        label: 'Series 2',
        data: datarand()
      }
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left', stacked:false }
    ],
    []
  )


  return(
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes}/>

      <p>Chart stub</p>
      <br/>
      <p>{props.interest_rate}</p>
    </div>
    );

}

export default ChartRender

import React, {Component} from 'react'
import { Chart } from 'react-charts'

function ChartRender(){

	const min = 1;
    const max = 100;

    function randomNum(){
    	return min + Math.random() * (max - min);
    }

	const datarand =(
		() => [[0, randomNum()], [1, randomNum()], [2, randomNum()], [3, randomNum()], [4, randomNum()]]
	)

	const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: datarand()
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
      <Chart data={data} axes={axes} />
    </div>
		);
}

export default ChartRender
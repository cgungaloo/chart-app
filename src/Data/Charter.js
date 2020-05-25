import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js';

var data = {
  labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6","Year 7","Year 8","Year 9","Year 10"],
  datasets: [
    {
      label: "First dataset",
      data: [],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};

export default class LineDemo extends Component {

  componentDidMount(){
      var initial_value =10
      data.datasets[0].data = this.compoundList(initial_value)
      console.log(data.datasets[0].data[0])
      let lineChart = this.reference.chartInstance
      lineChart.update();
  }

  componentDidUpdate(){
      var initial_value =10
      data.datasets[0].data = this.compoundList(initial_value)
      console.log(data.datasets[0].data[0])
      let lineChart = this.reference.chartInstance
      lineChart.update();
  }

  compoundList(initial_value){
    var current_value =initial_value
    const interest_rate = this.props.interest_rate
    var compoundList =[];

    for (var i =0; i < 10; i++){
      current_value = this.calculateCompound(current_value, interest_rate)
      compoundList.push(current_value);
    }
    return compoundList;
  }

  calculateCompound(current_value, interest_rate){
    return current_value + (current_value * interest_rate)
  }

render(){
  return (
      <div>
        <Line data={data} ref={(reference) => this.reference = reference} width={5} height={1}/>
        <h1>Interest Rate: {this.props.interest_rate}</h1>
      </div>
    );
  }


}

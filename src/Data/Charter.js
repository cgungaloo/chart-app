import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

export default class LineDemo extends Component {

  state ={
    data:{
      labels: [],
      datasets: [
        {
          label: "Total Amount",
          data: [],
          fill: false,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        }
      ]
    }
  }

  componentDidMount(){
      var initial_value =this.props.initial_amount
      let data = this.state.data
      var number_of_years = this.props.number_of_years
      data.labels = this.graphYearAxis(number_of_years)
      data.datasets[0].data = this.compoundList(initial_value)
      console.log(data.datasets[0].data[0])
      this.setState({ ...data});
  }

  componentDidUpdate(prevProps){
    if (prevProps !== this.props)  {
      var initial_value =this.props.initial_amount
      var number_of_years = this.props.number_of_years

      let data = this.state.data;
      data.labels = this.graphYearAxis(number_of_years)
      data.datasets[0].data = this.compoundList(initial_value)
      console.log(data.datasets[0].data[0])
      this.setState({ ...data });
    }
  }

  graphYearAxis(number_of_years){
    var xAxis =[]
    for(var i=1; i <= number_of_years; i++){
      xAxis.push("Year " + i)
    }
    return xAxis;
  }

  compoundList(initial_value){
    const annual_payments = parseFloat(this.props.annual_payments)
    var current_value = parseFloat(initial_value)
    const interest_rate = parseFloat(this.props.interest_rate)
    const number_of_years = this.props.number_of_years;

    var compoundList =[];

    for (var i =0; i < number_of_years; i++){
      current_value = this.calculateCompound(current_value, interest_rate,annual_payments)
      compoundList.push(current_value);
    }
    return compoundList;
  }

  calculateCompound(current_value, interest_rate, annual_payments){

    return current_value + ((current_value/100) * interest_rate) + annual_payments
  }

render(){
  return (
      <div>
        <Line data={this.state.data} ref={(reference) => this.reference = reference} width={5} height={1}/>
        <h1>% Interest Rate: {this.props.interest_rate}</h1>
        <h1>Initial Value: {this.props.initial_amount}</h1>
        <h1>annual_payments: {this.props.annual_payments}</h1>
        <h1>number_of_years: {this.props.number_of_years}</h1>
      </div>
    );
  }


}

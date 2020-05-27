import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

export default class LineDemo extends Component {

  state ={
    data:{
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
    }
  }

  componentDidMount(){
      var initial_value =this.props.initial_amount
      let data = this.state.data
      data.datasets[0].data = this.compoundList(initial_value)
      console.log(data.datasets[0].data[0])
      this.setState({ ...data});
  }

  componentDidUpdate(prevProps){
    if (prevProps.interest_rate !== this.props.interest_rate || prevProps.initial_amount !== this.props.initial_amount) {
      var initial_value =this.props.initial_amount
      let data = this.state.data;
      data.datasets[0].data = this.compoundList(initial_value)
      console.log(data.datasets[0].data[0])
      this.setState({ ...data });
    }
  }


  compoundList(initial_value){
    const annual_payments = parseFloat(this.props.annual_payments)
    var current_value = parseFloat(initial_value) + annual_payments
    const interest_rate = parseFloat(this.props.interest_rate)
    var compoundList =[];

    for (var i =0; i < 10; i++){
      current_value = this.calculateCompound(current_value, interest_rate)
      compoundList.push(current_value);
    }
    console.log(compoundList)
    return compoundList;
  }

  calculateCompound(current_value, interest_rate){

    return current_value + ((current_value/100) * interest_rate)
  }

render(){
  return (
      <div>
        <Line data={this.state.data} ref={(reference) => this.reference = reference} width={5} height={1}/>
        <h1>Interest Rate: {this.props.interest_rate}</h1>
      </div>
    );
  }


}

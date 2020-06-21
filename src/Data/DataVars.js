import React, {Component} from 'react'
import Charter from './Charter'

class DataVars extends Component{
	constructor() {
		super();
		this.state = {
			interest_rate:0.05,
			initial_amount:1000,
			annual_payments:100,
			number_of_years:10
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		event.preventDefault();
		const inputs = event.target.getElementsByTagName('input');
		console.log(inputs.interest_rate.value)
		this.setState({
			 interest_rate: inputs.interest_rate.value,
			 initial_amount: inputs.initial_amount.value,
			 annual_payments: inputs.annual_payments.value,
			 number_of_years: inputs.number_of_years.value
		 },
	 	function() { console.log("setState completed", this.state) });

	}

	render(){

		const {interest_rate,initial_amount,annual_payments,number_of_years} = this.state
		return(
		<div>

			<Charter interest_rate={interest_rate} initial_amount={initial_amount} annual_payments={annual_payments}
			number_of_years={number_of_years}/>

			<form onSubmit={this.handleSubmit}>
				<label for="interest_rate">% Interest Rate</label>
				<input type="text" name="interest_rate" id="interest_rate"/><br/>
				<label for="initial_amount">Initial Value</label>
				<input type="text" name="initial_amount" id="initial_amount"/><br/>
				<label for="annual_payments">Annual Payments</label>
				<input type="text" name="annual_payments" id="annual_payments"/><br/>
				<label for="number_of_years">Number of years</label>
				<input type="number" name="number_of_years" id="number_of_years" min="1" max="100"/><br/>
				<input type="submit" value="Submit" />
			</form>
		</div>

	);
	}
}

export default DataVars

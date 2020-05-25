import React, {Component} from 'react'
import Charter from './Charter'

class DataVars extends Component{
	constructor() {
		super();
		this.state = {
			interest_rate:0.05,
			initial_amount:1000
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		event.preventDefault();
		const inputs = event.target.getElementsByTagName('input');
		console.log(inputs.interest_rate.value)
		this.setState({
			 interest_rate: inputs.interest_rate.value,
			 initial_amount: inputs.initial_amount.value
		 },
	 	function() { console.log("setState completed", this.state) });

	}

	render(){

		const {interest_rate,initial_amount} = this.state
		return(
		<div>

			<Charter interest_rate={interest_rate} initial_amount={initial_amount}/>

			<form onSubmit={this.handleSubmit}>
				<label for="interest_rate">Interest Rate</label>
				<input type="text" name="interest_rate" id="interest_rate"/><br/>
				<label for="initial_amount">Initial Value</label>
				<input type="text" name="initial_amount" id="initial_amount"/><br/>
				<input type="submit" value="Submit" />
			</form>
		</div>

	);
	}
}

export default DataVars

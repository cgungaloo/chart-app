import React, {Component} from 'react'
import Charter from './Charter'

class DataVars extends Component{
	constructor() {
		super();
		this.state = {
			interest_rate:0.5,
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		event.preventDefault();
		console.log("EL " + this.element.value)
		this.setState({
			 interest_rate: this.element.value
		 },
	 	function() { console.log("setState completed", this.state) });
		console.log("state "+ this.state);;
		this.forceUpdate()
	}

	render(){

		const {interest_rate} = this.state
		console.log("ref rate : " +interest_rate)
		return(
		<div>

			<Charter interest_rate={interest_rate}/>

			<form onSubmit={this.handleSubmit}>
				<input type="text" name="interest_rate" ref={el => this.element = el} />
				<input type="submit" value="Submit" />
			</form>
		</div>

	);
	}
}

export default DataVars

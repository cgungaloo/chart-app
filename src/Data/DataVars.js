import React, {Component} from 'react'
import Charter from './Charter'

class DataVars extends Component{
	constructor() {
		super();
		this.state = {
			interest_rate:'0.5',
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		event.preventDefault();
		console.log(this.element.value)
		this.setState({
			 interest_rate: this.element.value
		 },
	 	function() { console.log("setState completed", this.state) });

	}

	render(){

		const {interest_rate} = this.state
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

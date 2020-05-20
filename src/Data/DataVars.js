import React, {Component} from 'react'

class DataVars extends Component{


	render() {
		const {interest_rate} = this.props
		return(
		<h2>Interest: {this.props.interest_rate}</h2>
		);
	}

}

export default DataVars
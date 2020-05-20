import React, {Component} from 'react'

class CompoundInterestForm extends Component{

	constructor(props){
		super(props);
	}

	mySubmitHandler = (event) => {
    	event.preventDefault();
  	}

  	  myChangeHandler = (event) => {
    	this.setState({interest_rate: event.target.value});
  	  }

	render(){
		return(
			<form onSubmit={this.mySubmitHandler}>
      <p>Interest Rate:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      </form>
		);	
	}		
}

export default CompoundInterestForm
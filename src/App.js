import React, {Component} from 'react'
import ChartRender from './ChartRender'
import CompoundInterestForm from './CompoundForm/CompoundInterestForm'
import DataVars from './Data/DataVars'

class App extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      interest_rate: 5,
    }
  }

  render() {
    const {interest_rate} = this.state
    return(
        <div className="container">
          <h1>Compound interest</h1>
          <ChartRender props={this.props}/>
          <CompoundInterestForm/>
          <DataVars interest_rate={interest_rate}/>
        </div>
      )
  }
}


export default App
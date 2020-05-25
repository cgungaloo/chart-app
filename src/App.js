import React, {Component} from 'react'
import ChartRender from './ChartRender'
import CompoundInterestForm from './CompoundForm/CompoundInterestForm'
import DataVars from './Data/DataVars'

class App extends Component {

  render() {
    return(
        <div className="container">
          <h1>Compound interest</h1>
          <DataVars />
        </div>
      )
  }
}


export default App

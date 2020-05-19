import React, {Component} from 'react'
import ChartRender from './ChartRender'

class App extends Component { 
  render() {

    return(
        <div className="container">
          <h1>Compound interest</h1>
          <ChartRender />
        </div>
      )
  }
}


export default App
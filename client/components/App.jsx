import React from 'react'

// import Header from './Header'
import Start from './Start'
// import During from './During'
// import End from './End'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isStartVisible: false,
      isDuringVisible: false,
      isEndVisible: false
    }
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleRematch = this.handleRematch.bind(this)
  }

  handleStart () {
    this.setState({
      isStartVisible: !this.state.isStartVisible
      // isDuringVisible: true
    })
  }

  handleStop () {
    this.setState({
      isDuringVisible: false,
      isEndVisible: true
    })
  }

  handleRematch () {
    this.setState({
      isEndVisble: false,
      isStartVisible: true
    })
  }

  render () {
    return (

      <div>
        <h1> hey does this work </h1>
        <button onClick={this.handleStart}>Toggle</button>
        {this.state.isStartVisible && <Start />}
      </div>
    )
  }
}

export default App

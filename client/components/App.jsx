import React from 'react'

// import Header from './Header'
import Start from './Start'
import During from './During'
// import End from './End'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isStartVisible: true,
      isDuringVisible: false,
      isEndVisible: false
    }
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleRematch = this.handleRematch.bind(this)
  }

  handleStart () {
    this.setState({
      isStartVisible: !this.state.isStartVisible,
      isDuringVisible: !this.state.isDuringVisible
    })
  }

  handleStop () {
    this.setState({
      isDuringVisible: !this.state.isDuringVisible,
      isEndVisible: !this.state.isEndVisible
    })
  }

  handleRematch () {
    this.setState({
      isEndVisible: !this.state.isEndVisible,
      isStartVisible: !this.state.isStartVisible
    })
  }

  render () {
    return (
      <div>
        <h1> hey does this work </h1>
        {this.state.isStartVisible && <Start start={this.handleStart}/>}
        {this.state.isDuringVisible && <During />}
        {this.state.isEndVisible && <End />}
      </div>
    )
  }
}

export default App

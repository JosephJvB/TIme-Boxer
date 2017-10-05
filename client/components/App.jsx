import React from 'react'

// import Header from './Header'
import Start from './Start'
import During from './During'
import End from './End'

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
        {this.state.isDuringVisible && <During stop={this.handleStop}/>}
        {this.state.isEndVisible && <End rematch={this.handleRematch} />}


        <section className="hero">
          <div className="hero-body" >
            <div className="container">
              <h1 className="title">
              Welcome to the Time-Boxer!
              </h1>
              <h2 className="subtitle">
                <br/> Can you make a coffee in under three minutes?
              Can you write a Stateful component in under five minutes?
                <br/>Time yourself - set your time and see if you can bet the clock.
              </h2>
            </div>
          </div>
        </section>
        <figure className="image is-128x128" >
          <img src="http://media.istockphoto.com/photos/alarm-clock-picture-id174764752?k=6&m=174764752&s=612x612&w=0&h=-LNUItbV31NAHsiT8cmXhqAbfQmuZ9bP9eB0ZSc0r14="/>
        </figure>
        <a className="button is-danger is-hovered">Click here</a>
      </div>
    )
  }
}

export default App

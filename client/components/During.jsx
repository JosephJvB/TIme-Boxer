import React from 'react'

class During extends React.Component {
  constructor (props) {
    super(props)
    const startMins = 5
    this.state = this.secondsToTime(startMins * 60)
    this.timer = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
  }

  secondsToTime (secs) {
    let hours = Math.floor(secs / (60 * 60))
    let divisorForMinutes = secs % (60 * 60)

    let minutes = Math.floor(divisorForMinutes / 60)
    let divisorForSeconds = divisorForMinutes % 60

    let seconds = Math.ceil(divisorForSeconds)

    let obj = {
      'min': minutes,
      'sec': seconds
    }
    return obj
  }

  componentDidMount () {
    this.startTimer()
  }

  startTimer () {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000)
    }
  }

  countDown () {
    let totalSecs = (this.state.min * 60) + this.state.sec - 1
    this.setState(this.secondsToTime(totalSecs))
    // maybe is here to stop the timer..
    if (totalSecs === 0) {
      clearInterval(this.timer)
    }
  }

  render () {
    // const During = (props) => {
    return (
      <div>
        <h1>Clock is on!</h1>
          m: {this.state.min} s: {this.state.sec} {' '}
        <button onClick={this.props.stop}>Stop the timer!</button>
      </div>
    )
    // }
  }
}

export default During

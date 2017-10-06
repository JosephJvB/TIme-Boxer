import React from 'react'

class During extends React.Component {
  constructor (props) {
    super(props)
    this.state = {time: {m: 1, s: 60}, seconds: 300}
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
      'h': hours,
      'm': minutes,
      's': seconds
    }
    return obj
  }
  componentDidMount () {
    let timeLeftVar = this.secondsToTime(this.state.seconds)
    this.setState({time: timeLeftVar})
  }
  startTimer () {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000)
    }
  }
  countDown () {
    let seconds = this.state.seconds - 1
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    })
    // maybe is here to stop the timer..
    if (seconds === 0) {
      clearInterval(this.timer)
    }
  }
  render () {
    // const During = (props) => {
    return (
      <div>
        <h1>Clock is on!</h1>
        <button onClick={this.props.stop}>Stop the timer!</button> {' '}
          m: {this.state.time.m} s: {this.state.time.s}
      </div>
    )
    // }
  }
}

export default During

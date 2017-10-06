import React from 'react'

class During extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.secondsToTime(props.mins * 60)
    this.timer = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
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

  stopTimer () {
    clearInterval(this.timer)
    this.props.stop(this.state)
  }

  render () {
    // const During = (props) => {
    let totalSecs = Number(this.state.min) * 60 + Number(this.state.sec)
    let startSecs = Number(this.props.mins) * 60
    let percent = Number(totalSecs / startSecs) * 100
    return (
      <div>
        <h1 className="title is-1" >Clock is on!</h1>
        <progress className={`progress ${percent > 33 ? percent > 66 ? "is-success" : "is-warning" : "is-danger"}`} value={percent} max="100">30%</progress>
        <p className="title is-1">{this.state.min}m {this.state.sec}s {' '}</p>
        <button className="button is-large is-danger" onClick={this.stopTimer}>Stop the timer!</button>
      </div>
    )
    // }
  }
}

export default During

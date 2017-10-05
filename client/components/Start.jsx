import React from 'react'

class StartButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mins: 0
    }
  }
  updateMinutes (e) {
    console.log(e.target)
    this.setState({mins: e.target.value})
  }
  render () {
    const {mins} = this.state
    console.log(mins)
    return <form>
      <h1>{mins} minutes</h1>
      <input className="input" name="minutes" value={mins} type="range" min="1" max="5" onChange={this.updateMinutes.bind(this)}/>
      
    {mins != 0 
       ? <button onClick={() => this.props.start(mins)} className={`button is-large is-success is-hovered`}>Start Timer</button> 
       : <button disabled  className={`button is-large is-danger is-hovered`}>Select Minutes</button> 
    }
    </form>
  }
}

const Start = (props) => {
  return (
    <div className="">
      <div className="content">
        {/* {startButton(props.start)} */}
      </div>

      <div className="container tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">So you wanna Time yourself? See how fast you are?</p>
                <p className="subtitle">This app is designed to to exactly that - see just how fast you can be </p>

              </article>

            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-warning">
                <p className="title">Tasks to Time</p>
                <p className="subtitle">Pick your task - is it making coffee? is it working out? is it coding? You can time anything</p>
                <figure className="image is-4by4 has-text-centered">
                  <img src="https://marketplace.canva.com/MACRIqfAJf0/1/thumbnail_large/canva-angry-businessman-with-boxing-gloves--MACRIqfAJf0.jpg"/>
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-primary">
              <p className="title is-1">Wanna get Started?</p>
              <p className="subtitle is-4">Click Below to start your timer</p>
              <div className="content">
                <StartButton start={props.start}/>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-primary">
            <div className="content">
              <p className="title is-1">Our History</p>
              <p className="subtitle">Some of fasters coffee makers and coders have used this timer to help them get where they are today - and you can too </p>
              <div className="content">

              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Start

import React from 'react'

const Start = (props) => {
  return (
    <div>
      <h1>This is start</h1>
      <button onClick={props.start}>Start!</button>

      <div className="tile is-ancestor">
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
                <p className="subtitle">Pick your task - is it making coffee? is it working out? is it codeing? You can time anything</p>
                <figure className="image is-4by4">
                  <img src="https://marketplace.canva.com/MACRIqfAJf0/1/thumbnail_large/canva-angry-businessman-with-boxing-gloves--MACRIqfAJf0.jpg"/>
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-primary">
              <p className="title">Wanna get Started?</p>
              <p className="subtitle">Click Below to start your timer</p>
              <div className="content">
                <a className="button is-danger is-hovered">Click here</a>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-primary">
            <div className="content">
              <p className="title">Our History</p>
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

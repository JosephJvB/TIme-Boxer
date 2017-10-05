import React from 'react'

const During = (props) => {
  return (
    <div>
      <h1>Clock is on!</h1>
      <button onClick={props.stop}>Stop the timer!</button>
    </div>
  )
}

export default During

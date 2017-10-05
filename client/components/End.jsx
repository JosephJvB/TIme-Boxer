import React from 'react'

const End = (props) => {
  return (
    <div>
      <h1>Times out!</h1>
      <button onClick={props.rematch}>Want to try again?</button>
    </div>
  )
}

export default End

import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.incrementCount}>{props.text}</button>
        <button onClick={props.decrement}>decrement</button>
    </div>
  )
}

export default Button
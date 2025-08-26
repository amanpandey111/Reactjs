import React from 'react'

export const Size = {
    medium : 1,
    small : 2,
    large : 3
}

const Button = ({size}) => {
    console.log(size);
  return (
    <div>Button</div>
  )
}

Button.Size = Size

export default Button
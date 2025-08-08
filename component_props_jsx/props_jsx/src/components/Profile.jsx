import React from 'react'

const Profile = ({name,age,greeting,children,wish}) => {
    // let {name,age} = props
  return (
    <div>
        <h3>Name : {name}</h3>
        <h4>Age : {age}</h4>
        {greeting}
        {wish}
        {children}

        {/* <h3>Name : {props.name}</h3>
        <h4>Age : {props.age}</h4>
        {props.greeting}
        {props.children} */}
    </div>
  )
}

export default Profile
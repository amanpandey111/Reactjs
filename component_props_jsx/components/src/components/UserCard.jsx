import React from 'react'
import pic1 from "../assets/pic1.webp"
import './UserCard.css'
const UserCard = (props) => {
  return (
    <div className='user_container' style={props.style}>
        <h1 id='user_name'>{props.name}</h1>
        <img id='user_image' src={props.image} alt="" />
        <p id='user_desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
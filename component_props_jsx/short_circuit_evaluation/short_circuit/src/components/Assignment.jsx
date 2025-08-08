import React from 'react'

let user = {
    name: "Anshul Jubli",
    age: 24,
    email: "anshul@example.com",
    location: "", // might be empty or undefined
    bio: null,    // might be null
    isPremium: true, // or false
}

const Assignment = () => {
    console.log(user);
  return (
    <div>
        <h1>Assignment</h1>
        <h3>Name : {user.name} </h3>
        <h3>Age : {user.age} </h3>
        <h3>Location : {user.location||"Location Not Available"} </h3>
        <h3>Bio : {user.bio??"No bio Available"} </h3>
        {user.isPremium && <span className='badge'>Premium User</span> }
    </div>
  )
}

export default Assignment
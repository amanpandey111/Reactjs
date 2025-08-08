import React from 'react'

const EventHandlerOne = () =>{
    function handleButton(e){
        console.log(e);
        console.log(e.target.value);
        alert("button handled")
    }
    function handleButtonArrow(event){
        console.log(event);
    }
    function handleGreet(event,name){
        console.log(event);
        console.log(`good afternoon ${name}`);
        // console.log("Good afternoon ",name);
    }
    return (
        <div>
            <button onClick={handleButton} value="submit" >Submit</button>
            <button onClick={(event)=>handleButtonArrow(event)} value="submit" >Arrow function</button>
            <button onClick={(event)=>console.log(event)} value="submit" >Inline calling</button>
            <button onClick={(event)=>handleGreet(event,"aman pandey")}>greet me</button>
        </div>
    )
}
export default EventHandlerOne
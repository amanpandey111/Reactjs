import React from 'react'

const CardDetail = ({img,name,rating,summary,genre,age}) => {

    function ageFunction(){
        if (age>18){
            return "watch now"
        }else{
            return "Not available"
        }
    }

    return (
        <div>
            <img src={img} alt="" />
            <h2>Name : {name} </h2>
            <h3>Rating : {rating} </h3>
            <p>Summary : {summary} </p>
            <p>Genre : {genre}</p>
            {/* <button>{ageFunction()}</button> */}
            <button>{age>18?"Watch Now":"Not Awailable"}</button>
        </div>
    )
}

export default CardDetail
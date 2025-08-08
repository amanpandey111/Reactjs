import React, { useState } from 'react'

const Form = () => {
    // const[isShow,setIsShow] = useState(false)
    const[isShow,setIsShow] = useState("")
    const[data,setData] = useState({
        firstname:"",
        lastname:"",
        email:""
    })
    const handleInputChange = (e) => {
        const{name,value} = e.target 
        setData((prev)=>({...prev,[name]:value}))
        setIsShow("")
    }
    const handleFormSubmit= (e) => {
        e.preventDefault()
        // setIsShow(true)
        setIsShow(`First Name ${data.firstname} Last Name ${data.lastname} Email ${data.email}`)
        setData({
            firstname:"",
            lastname:"",
            email:""
        })
    }
    console.log(isShow);
    return (
        <section>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="">First Name : </label>
                    <input type="text" name='firstname' value={data.firstname} onChange={handleInputChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="">Last Name : </label>
                    <input type="text" name='lastname' value={data.lastname} onChange={handleInputChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="">Email : </label>
                    <input type="text" name='email' value={data.email} onChange={handleInputChange} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
            {/* {isShow && <h1>{data.firstname} {data.lastname} {data.email}</h1>} */}
            <h1>{isShow}</h1>
        </section>
    )
}

export default Form
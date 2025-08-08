import { useRef } from "react"

const UncontrollRef = ()=> {
    const first_name = useRef("")
    const last_name = useRef("")
    const email = useRef("")
    const password = useRef("")

    // console.log(first_name);   //! here we will get a object with current key
    // console.log(first_name.current);  //! here we will access the value of current key in our object

    function handleFormSubmit(e){
        e.preventDefault();
        console.log(first_name.current.value,last_name.current.value,email.current.value,password.current.value);
    }

    return(
        <div>
            <h1>Let's Practice the second way in Uncontrolled Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>First Name : </label>
                <input type="text" ref={first_name} placeholder="Enter First Name" /> <br /><br />
                <label>Last Name : </label>
                <input type="text" ref={last_name} placeholder="Enter Last Name" /> <br /><br />
                <label>Email : </label>
                <input type="email" ref={email} placeholder="Enter Email" /> <br /><br />
                <label>Password : </label>
                <input type="password" ref={password} placeholder="Enter Password" /> <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default UncontrollRef
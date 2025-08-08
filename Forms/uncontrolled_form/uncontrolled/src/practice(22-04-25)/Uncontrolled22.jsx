const Uncontrolled22 = ()=> {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("form Submitted");
        const first_name = document.getElementById("first-name")
        const last_name = document.getElementById("last-name")
        const email = document.getElementById("email")
        const password = document.getElementById("password")
        console.log(first_name.value,last_name.value,email.value,password.value);
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>First Name :</label>
                <input type="text" placeholder="Enter First Name" id="first-name" autoComplete="off" />  <br /><br />

                <label>Last Name :</label>
                <input type="text" placeholder="enter last name" id="last-name" autoComplete="off" /> <br /><br />

                <label>Email :</label>
                <input type="email" placeholder="Enter Email" id="email" autoComplete="off" /> <br /><br />

                <label>Password :</label>
                <input type="password" placeholder="Enter Password" id="password" autoComplete="off" /> <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Uncontrolled22

import { useState, useEffect } from "react";

const FormValidation = () => {
  const [userData, changeUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [users, setUser] = useState([]);
  const [submitted, setSubmitted] = useState(false); 

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    changeUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUser((prev) => [...prev, userData]);
    setSubmitted(true); 
  };

  useEffect(() => {
    if (submitted) {
      console.log("Updated Users Array:", JSON.stringify(users));
      let u1 = JSON.parse(localStorage.getItem("user"))
      if(u1==null){
        let s = JSON.stringify(users)
        localStorage.setItem("user",s)
      }
      else{
        let r = JSON.parse(localStorage.getItem("user"))
        let l = users.at(-1)
        r.push(l)
        console.log(typeof r.length);
        
        //! Let's remove duplicates from array
        if(r.length==2){
            if(r[0].email==r[1].email) {
                r.pop()
            }
        }
        if (r.length > 3) {
            const uniqueByEmail = new Map();
            console.log(uniqueByEmail);

            // Only keep the latest user for each email
            for (let user of r) {
                uniqueByEmail.set(user.email, user);
            }
            console.log(uniqueByEmail);

            const updatedArray = Array.from(uniqueByEmail.values());
            console.log(updatedArray);
            localStorage.setItem("user", JSON.stringify(updatedArray));
        } 
        else {
            localStorage.setItem("user", JSON.stringify(r));
        }
      }
    }
  }, [users]); 
//   localStorage.removeItem("user")
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <label>First Name </label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          value={userData.firstname}
          onChange={handleInputChange}
        />
        <br />
        <label>Last Name </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          value={userData.lastname}
          onChange={handleInputChange}
        />
        <br />
        <label>Enter Email Address </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <br />
        <label>Password </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default FormValidation;

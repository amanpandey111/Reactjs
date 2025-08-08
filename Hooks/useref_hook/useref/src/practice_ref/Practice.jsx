import { useRef } from 'react'

const Practice = () => {
    const fname = useRef("")
    const lname = useRef("")
    const email = useRef("")
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(fname.current.value,lname.current.value,email.current.value);
    }

  return (
    <section>
        <form onSubmit={handleFormSubmit} >
            <input type="text" ref={fname} placeholder='Enter First Name' /> <br /> <br />
            <input type="text" ref={lname} placeholder='Enter Last Name' /> <br /> <br />
            <input type="text" ref={email} placeholder='Enter Email' /> <br /> <br />
            <button>submit</button>
        </form>
    </section>
  )
}

export default Practice
import { useRef } from "react";

const Form = () => {
    // const formData = {
    //     name: useRef(),
    //     email: useRef(),
    //     age: useRef()
    // };

    const name = useRef("")
    const email = useRef("")
    const age = useRef("")
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(name.current.value,email.current.value,age.current.value);
    }

    return (
        <section>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="">Enter Name</label>
                    {/* <input type="text" ref={formData.name} /> */}
                    <input type="text" ref={name} />
                </div>
                <div>
                    <label htmlFor="">Enter Email</label>
                    {/* <input type="text" ref={formData.email} /> */}
                    <input type="text" ref={email} />
                </div>
                <div>
                    <label htmlFor="">Enter Age</label>
                    {/* <input type="text" ref={formData.age} /> */}
                    <input type="text" ref={age} />
                </div>
                <div><button>submit</button></div>
            </form>
            <p></p>
        </section>
    )
}

export default Form
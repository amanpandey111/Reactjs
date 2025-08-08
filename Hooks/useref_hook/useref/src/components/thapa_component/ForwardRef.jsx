import { useId, useRef } from 'react'

const ForwardRef = () => {
    const username = useRef(null)
    const password = useRef(null)
    function handleFormSubmit(e){
        e.preventDefault();
        console.log(username.current.value," ",password.current.value);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <BeforeReact19Input label="username" ref={username} />
            <BeforeReact19Input label="password" ref={password} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ForwardRef

const BeforeReact19Input = (props) => {
    const id = useId()
    return(
        <div>
            <label>{props.label}</label>
            <input type="text" ref={props.ref} />
        </div>
    )
}
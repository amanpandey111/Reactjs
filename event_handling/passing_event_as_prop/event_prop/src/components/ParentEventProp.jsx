import ChildEventProp from "./ChildEventProp"

const ParentEventProp = () => {
    //! You can even destructure the props and send the function name directly
    const HandleWelcomeUser = (user) => {
        alert(`Hey ${user}`)
    }
    const handleHover = () => {
        alert(`Hey Thanks for hovering me`)
    }
    return(
        <div>
            
            <ChildEventProp 
            onClick={()=>HandleWelcomeUser("Aman")}
            onMouseEnter={handleHover}
            />
        </div>
    )
}

export default ParentEventProp
const ChildEventProp = (props) => {
    function handleGreeting(){
        console.log(`hey user, welcome`);
        props.onClick()
    }
    return(
        <div>
            {/* //! Here child will be callin to parent function */}
            <button onClick={props.onClick} >click</button>
            <button onMouseEnter={props.onMouseEnter}>Hover me</button>

            {/* //todo Here child will be having it's own event */}
            <button onClick={handleGreeting} >Greeting</button>
        </div>
    )
}

export default ChildEventProp
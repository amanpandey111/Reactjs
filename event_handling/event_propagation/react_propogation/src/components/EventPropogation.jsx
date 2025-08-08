import './EventPropogation.css'

const EventPropogation = () => {

    function handleChild(event){
        console.log("child clicked");
        // event.stopPropagation()
    }

    function handleParent(event){
        console.log("parent clicked");
        // event.stopPropagation()
    }

    function handleGrandParent(event){
        console.log("grandparent clicked");
        // event.stopPropagation()
    }
    return(
        //! Capturing Phase
        // <div id='grand-parent' onClickCapture={handleGrandParent}>
        //     <div id='parent' onClickCapture={handleParent}>
        //         <div id='child' onClickCapture={handleChild} >Children block</div>
        //     </div>
        // </div>

        //! Bubbling phase
        <div id='grand-parent' onClick={handleGrandParent}>
            <div id='parent' onClick={handleParent}>
                <div id='child' onClick={handleChild} >Children block</div>
            </div>
        </div>
    )
}

export default EventPropogation
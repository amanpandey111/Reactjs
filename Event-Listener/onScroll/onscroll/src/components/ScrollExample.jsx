import { useState } from "react"

function ScrollExample() {
    //! Defining all the hooks/states
    const[scrollHeight, setScrollHeight] = useState(0)

    //! Defining all the function 
    function handleScroll(e){
        console.log(e.currentTarget.scrollTop);
        setScrollHeight(e.currentTarget.scrollTop)
    }

    //! Defining all the variable
    const pages = ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10']

    //! Returning the jsx 
    return (
        <div className="border-2" >
            <h1 className="font-extrabold text-2xl m-2" >Let's Learn the onScroll EventListener</h1>
            <p>Scroll Height is : {scrollHeight}</p>
            <div onScroll={handleScroll} className="m-2 border-2 w-[25%] h-30 overflow-auto" >
                <div className="border-2 border-amber-600" >
                    {
                        pages.map((curPage, index) => {
                            return (
                            <p key={index} >{curPage}</p>
                        )
                        })
                    }
                </div>
            </div>
                <h1>tfjg</h1>
        </div>
    )
}

export default ScrollExample
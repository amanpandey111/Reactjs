import { useState, useTransition } from "react"

const WithUseTransition = () => {
    const[isPending, startTransition] = useTransition()
    const[inputtext,setInputText] = useState('aman')
    const[querytext,setQueryText] = useState(inputtext)

    function handleChange(e){
        setInputText(e.target.value)
        startTransition(()=>{
            setQueryText(e.target.value)
        })
    }

    console.log(inputtext);
    return(
        <div>
            <input type="text" placeholder="Enter here.." value={inputtext} onChange={handleChange}
            className='border border-gray-400 rounded px-3 py-2 outline-none focus:ring-3 focus:ring-blue-400'
            />
            { isPending && <p>Applying Your Changes</p> }
            <div>
                <SlowList querytext={querytext} />
            </div>
        </div>
    )
}

export default WithUseTransition

const SlowList = ({ querytext }) => {
    // console.log(qu);
    const items = [];
    for (let i = 0; i < 5000; i++) {
        items.push(<div key={i}>{querytext} - Item {i}</div>);
    }
    return <div>{items}</div>;
};
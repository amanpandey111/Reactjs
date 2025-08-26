
const SingleQuiz = ({ curObj, index, curindex, setcurindex, entiredata }: any) => {
    // const [curindex, setcurindex] = useState(0)
    console.log(entiredata.length);
    // console.log(curindex);
    // console.log(curObj, index);
    return (
        <div>
            {
                curindex === index && (
                    <div>
                        <p className="text-[25px]" >{curObj.question}</p>
                        {curObj.options.map((opt:any, optIndex:any) => (
                            <p key={optIndex}
                            className="border-1 p-2 mt-2"
                            >
                                {opt}
                            </p>
                        ))}
                        <button className="border-2 p-1 cursor-pointer m-auto" onClick={()=>setcurindex((prev:number)=>prev+1)} >next</button>
                    </div>
                )
            }
        </div>
    )
}

export default SingleQuiz
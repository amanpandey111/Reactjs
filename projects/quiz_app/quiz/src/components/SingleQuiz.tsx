import './quiz.css'
import { useDispatch } from "react-redux";
import { indexchange, scorechange, selectchange } from "../store/quizSlice";

const SingleQuiz = ({ curObj, index, curindex, selectedOpt }: any) => {
     const dispatch = useDispatch()
    function handleScore(opt:any){
        if(opt==curObj.correct){
            dispatch(scorechange(1))
        }
    }
    return (
        <div>
            {
                curindex === index && (
                    <div className="" >
                        <p className="text-[25px]" >{curObj.question}</p>
                        {curObj.options.map((opt:any, optIndex:any) => (
                            <p key={optIndex}
                            className={`${selectedOpt.length>1 && selectedOpt==opt && (selectedOpt==curObj.correct ? 'correct' : 'wrong') } 
                            ${selectedOpt.length>1 && (opt==curObj.correct ? 'correct1' : "") }
                            border-1 p-2 mt-2`
                            }
                            onClick={()=>{
                                handleScore(opt)
                                if(selectedOpt){
                                    return null
                                }
                                dispatch(selectchange(opt))
                                // setSelectedOpt(opt)
                            }}
                            >
                                {opt}
                            </p>
                        ))}
                        <div className="mt-2 flex justify-center" >
                            <button disabled={selectedOpt ? false : true} 
                            className="nextbutton border-1 p-0.5 cursor-pointer rounded w-[4rem] bg-[#a2c5e8] text-[black] border-none"
                            onClick={()=>{
                                // setcurindex((prev:number)=>prev+1)
                                dispatch(indexchange(1))
                                // setSelectedOpt("")
                                dispatch(selectchange(""))
                            }} >next</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SingleQuiz
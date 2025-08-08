import { act, useReducer } from "react"

const ControlledForm = () => {
    let initialstate = {
        name:"",
        email:"",
        age:""
    }
    function reducer(state,action){
        switch (action.type) {
            case "setvalue":
                const{name,value} = action.e.target
                // console.log("Let's add the data",value);
                // return state((prev)=>({...prev,[name]:value}))
                return {...state,[name]:value}
            default:
                return state
        }
    }
    const[formdata,dispatch] = useReducer(reducer,initialstate)
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(formdata);
    }
  return (
    <section>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="">Name : </label>
                <input type="text" name="name" value={formdata.name} onChange={(e)=>dispatch({type:"setvalue",e})} />
            </div>
            <div>
                <label htmlFor="">Email : </label>
                <input type="text" name="email" value={formdata.email} onChange={(e)=>dispatch({type:"setvalue",e})} />
            </div>
            <div>
                <label htmlFor="">Age : </label>
                <input type="text" name="age" value={formdata.age} onChange={(e)=>dispatch({type:"setvalue",e})} />
            </div>
            <div>
                <button>submit</button>
            </div>
        </form>
    </section>
  )
}

export default ControlledForm
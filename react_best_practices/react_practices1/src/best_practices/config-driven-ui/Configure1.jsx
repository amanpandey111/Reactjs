
const buttonObj = [
  {
    "id":1,
    "label":"Label1"
  },
  {
    "id":2,
    "label":"Label2"
  },
  {
    "id":3,
    "label":"Label3"
  }
]
const Configure1 = () => {
    function handleClickButton(e){
        let btnid = e.target.getAttribute("data-btn-id")
        const func = functionMapping[btnid]
        if(btnid==="1"){
            // labelOne()
            func()
        }else if(btnid==="2"){
            // labelTwo()
            func()
        }else if(btnid==="3"){
            // labelThree()
            func()
        }else{
            console.log("invalid id");
        }
    }
    const functionMapping = {
        1:labelOne,
        2:labelTwo,
        3:labelThree
    }
    function labelOne(){
        console.log("Label1 is ready");
    }
    function labelTwo(){
        console.log("Label2 is ready");
    }
    function labelThree(){
        console.log("Label3 is ready");
    }
  return (
    <div>
        <h2>configure1</h2>
        {
            buttonObj.map((curEle)=>{
                return <button data-btn-id={curEle.id} key={curEle.id} onClick={(e)=>handleClickButton(e)} >{curEle.label}</button>
            })
        }
    </div>
  )
}

export default Configure1
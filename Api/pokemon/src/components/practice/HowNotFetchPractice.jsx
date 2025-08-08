import { useEffect, useState } from "react"

const HowNotFetchPractice = () =>{
    //! In this way we should never fetch the api bcz it causes the re-rendering of page 
    // const[apiData,setApiData] = useState([])
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //    .then((res)=>res.json())
    //    .then((data)=>setApiData(data))
    //    .catch((error)=>console.log(error))
    // return (
    //     <div>
    //         <h1>Hello Let's Fetch the API</h1>
    //         {
    //             apiData.map((curEle)=>{
    //                 return <li key={curEle.id}>{curEle.title}</li>
    //             })
    //         }
    //     </div>
    // )

    //todo Simply we wrote the above code inside our useEffect with empty dependency array which will execute only once
    // const[apiData,setApiData] = useState([])
    // function fetchApiData(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //    .then((res)=>res.json())
    //    .then((data)=>setApiData(data))
    //    .catch((error)=>console.log(error))
    // }
    // useEffect(()=>{
    //     fetchApiData()
    // },[])
    // console.log(apiData);
    // return (
    //     <div>
    //         <h1>Hello Let's Fetch the API</h1>
    //         {
    //             apiData.map((curEle)=>{
    //                 return <li key={curEle.id}>{curEle.title}</li>
    //             })
    //         }
    //     </div>
    // )

    //todo Here we will see how to manage the loading and error state which fetching the api data
    const[apiData,setApiData] = useState([])
    const[isloading,setIsLoading] = useState(true)
    const[error,setError] = useState("")
    function fetchApiData(){
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then((res)=>res.json())
       .then((data)=>{
          setApiData(data)
          setIsLoading(false)
       })
       .catch((error)=>{
          console.log(error)
          setError(error)
          setIsLoading(false)
       })
    }
    useEffect(()=>{
        fetchApiData()
    },[])
    if(isloading){
        return <h1>Wait For a minute the data is Loading...</h1>
    }
    if(error){
        return <h1>Error : {error.message}</h1>
    }
    console.log(apiData);
    return (
        <div>
            <h1>Hello Let's Fetch the API</h1>
            {
                apiData.map((curEle)=>{
                    return <li key={curEle.id}>{curEle.title}</li>
                })
            }
        </div>
    )
}
export default HowNotFetchPractice
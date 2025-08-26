import { useEffect, useState } from "react";

const LoadMoreData1 = () => {
    const [data, setData] = useState([])
    const [ntimes, setNtimes] = useState(5)
    async function fetchApi(){
        let res = await fetch("https://dummyjson.com/products")
        let data = await res.json()
        console.log(data.products);
        setData(data.products)
    }
    useEffect(()=>{
        fetchApi()
    },[])
    function handleIncrement(){
        setNtimes((prev)=>prev+5)
    }
    let data1 = data?.slice(0,ntimes)
    console.log(data1);
  return (
    <div className="w-[40%] m-auto" >
        {
            data1?.map((curEle,index)=>{
                return(
                    <div key={curEle.id}
                    className="border-2 mt-4 flex flex-col justify-center items-center"
                    >
                        <h2>{curEle.title}</h2>
                        <img src={curEle.thumbnail} alt="" />
                    </div>
                )
            })
        }
        <button className="border-2 m-auto" onClick={handleIncrement}
        disabled = { data1?.length == 30 ? true : false }
        >{ data1?.length == 30 ? "Can't Load More Than 30" : "Load More Data" }</button>
    </div>
  )
}

export default LoadMoreData1
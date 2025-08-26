import { useEffect, useState } from "react"

const LoadMoreData = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchApi(limit,skip) {
        let res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`)
        let data = await res.json()
        setData((prev)=>([...prev,...data.products]))
    }
    useEffect(() => {
        fetchApi(10,0)
        setIsLoading(false)
    }, [])
    function handleFetch(limit,skip){
        console.log(limit,skip);
        fetchApi(limit,skip)
        setIsLoading(false)
    }
    console.log(data?.length);
    if(isLoading){
        return <h1>Loading Your Data Please Wait....</h1>
    }
    else{
        return (
        <div>
            <h1>Let's Apply Load More Button</h1>
            <div className="flex flex-wrap gap-2 w-[80%] m-auto" >
                {
                    data?.map((curEle) => {
                        return (
                            <div key={curEle.id} className="border-2 flex w-[100%]" >
                                <h1>Title : {curEle.title}</h1>
                                <p>Price : {curEle.price}</p>
                            </div>
                        )
                    })
                }
                <h2>Total Data You Fetched : {data.length}</h2>
                <button className="border-3 bg-[green] text-[white] p-1.5 m-auto cursor-pointer" 
                onClick={()=>handleFetch(10,data.length)}
                disabled={data?.length==100 ? true : false}
                >{data?.length==100 ? "You Can't fetch more than 100" : "Fetch More"}</button>
            </div>
        </div>
    )
    }
}

export default LoadMoreData


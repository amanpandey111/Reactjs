const getApiData = async() => {
    // const getApiData = async() =>{
        const res = await fetch('https://www.omdbapi.com/?s=guardians&apikey=c1ae2c28')
        const data = await res.json()

        // const res1 = await fetch("https://fakestoreapi.com/products") //! Here I fetched the second api data because two loader for single jsx not possible  
        // const data1 = await res1.json()
        // console.log(data);
        //! return {data,data1} , Here I am returning the two api data
        return data
    // }
    // const reladata = getApiData()
    // console.log(reladata);
}
export default getApiData
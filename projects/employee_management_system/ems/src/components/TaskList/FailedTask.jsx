
const FailedTask = (props) => {
    const{data} = props
    console.log(data);
    return (
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5' >
            <div className='flex justify-between items-center' >
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm' >{data.category}</h3>
                <h2 className='text-sm' >{data.taskDate}</h2>
            </div>
            <h2 className='mt-5 text-2xl font-semibold' >{data.taskTitle}</h2>
            <p className="text-sm mt-2">
                {data.taskDescription}
            </p>
            <div className="mt-5" >
                <button className='bg-red-500 py-1 px-2 text-sm w-full' >Failed</button>
            </div>
        </div>
    )
}

export default FailedTask
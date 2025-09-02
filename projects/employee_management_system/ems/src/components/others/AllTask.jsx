// import { useSelector } from "react-redux"

// const AllTask = () => {
//     const data = useSelector((state)=>state.auth)
//     console.log(data.authdata.employees);
//   return (
//     <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-50 overflow-auto" >
//         <div className="bg-red-400 py-2 px-4 flex justify-between" >
//             <h2>Aman Pandey</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className="bg-green-400 py-2 px-4 flex justify-between" >
//             <h2>Aman Pandey</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className="bg-yellow-400 py-2 px-4 flex justify-between" >
//             <h2>Aman Pandey</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className="bg-blue-400 py-2 px-4 flex justify-between" >
//             <h2>Aman Pandey</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className="bg-purple-400 py-2 px-4 flex justify-between" >
//             <h2>Aman Pandey</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className="bg-red-400 py-2 px-4 flex justify-between" >
//             <h2>Aman Pandey</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//     </div>
//   )
// }

// export default AllTask

import { useSelector } from "react-redux"

const AllTask = () => {
    const data = useSelector((state) => state.auth)
    // console.log(data.authdata.employees);
    return (
        <div className="bg-[#1c1c1c] p-5 rounded mt-5 " >
            <div className="mb-2 bg-red-400 py-2 px-4 flex justify-between gap-5" >
                <h2 className="text-lg font-medium w-1/5" >Employee Name</h2>
                <h3 className="text-lg font-medium w-1/5" >New Task</h3>
                <h5 className="text-lg font-medium w-1/5" >Active Task</h5>
                <h5 className="text-lg font-medium w-1/5" >Completed</h5>
                <h5 className="text-lg font-medium w-1/5" >Failed</h5>
            </div>
            <div>
                {
                    data.authdata.employees.map((elem, index) => {
                        return (
                            <div key={index} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between gap-5" >
                                <h2 className="text-lg font-medium w-1/5  text-white" >{elem.firstName}</h2>
                                <h3 className="text-lg font-medium w-1/5  text-blue-600" >{elem.taskCounts.newTask}</h3>
                                <h5 className="text-lg font-medium w-1/5  text-yellow-400" >{elem.taskCounts.active}</h5>
                                <h5 className="text-lg font-medium w-1/5  text-white" >{elem.taskCounts.completed}</h5>
                                <h5 className="text-lg font-medium w-1/5  text-red-600" >{elem.taskCounts.failed}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllTask
import Header from "../others/Header"
import TaskListNumbers from "../others/TaskListNumbers"
import TaskList from "../TaskList/TaskList"


const EmployeeDashboard = (props) => {
  const{data,changeUser} = props
  // console.log(changeUser);
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen" >
        <Header data={data} changeUser={changeUser} />
        <TaskListNumbers data={data} />
        <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard
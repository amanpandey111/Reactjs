import AllTask from "../others/AllTask"
import CreateTask from "../others/CreateTask"
import Header from "../others/Header"

const AdminDashboard = (props) => {
  const{changeUser} = props
  return (
    <div className="h-screen w-full p-10" >
        <Header changeUser={changeUser} />
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
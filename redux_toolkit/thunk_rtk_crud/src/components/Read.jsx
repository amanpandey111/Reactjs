import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, searchUser, setDropdown, showUser } from '../features/UserDetailSlice'
import CustomModal from './CustomModal'
import { NavLink } from 'react-router-dom'
import "./style.css"

const Read = ({message}) => {
  console.log(message);
  // const[dropdown,setDropdown] = useState(false)               
    const[id,setId] = useState()                             //! Getting Id to display individual data
    const[showPopup,setShowPopup] = useState(false)          //! Popup between individual data and all data
    const {users,loading,searchData,dropdown} = useSelector((state)=>state.app)  //! Getting all users to display their information and benfor loading to diaplay loading
    const[radioData,setRadioData] = useState('')
    // console.log(allData);
    console.log(users);
    const dispatch = useDispatch()                           //! to perform our actions

    //! Let's toggle the popup detail using useRef
    // const showPopup = useState(false)

    //! whenever coming to this component useEffect executed and will get our data
    useEffect(()=>{
        console.log("hy");
        dispatch(showUser())
    },[])

    const filteredBySearch = users && users
        .filter((ele) => {
            if (searchData.length === 0) {
                return ele;
            } else {
                // return ele.name.toLowerCase().includes(searchData.toLowerCase());
                return ele.name.toLowerCase()==searchData.toLowerCase()
            }
        });
    
    const filterByGender = filteredBySearch.filter((ele)=>{
          // console.log("causing rendering");
          console.log(ele);
          if(message==undefined && radioData==""){
            return ele
          }
          if(radioData=="Male"){
            let ele1 = ele.gender==radioData
            console.log(ele1);
            return ele.gender==radioData
          }else if(radioData=="Female"){
            let ele1 = ele.gender==radioData
            console.log(ele1);
            return ele.gender==radioData
          }else return ele
        })

    console.log("Output of the first filter (filtered by searchData):", filteredBySearch);
    console.log(filterByGender);

    if(loading){
        return <h2>Loading...</h2>
    }

    console.log(id);

  return (
    <div className='main-read'>
        {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>}
        <h1>All Data</h1>
        
      <select id="fruit-select" value={radioData} onChange={(e)=>{setRadioData(e.target.value);dispatch(searchUser(""))}} 
        onClick={(e)=> {e.stopPropagation(); dispatch(setDropdown())}}
        >
        <option value="" style={{textAlign:"start"}} onClick={()=>dispatch(searchUser(""))} >All</option>
        <option value="Male" style={{textAlign:"start"}}>Male</option>
        <option value="Female" style={{textAlign:"start"}}>Female</option>
      </select>
        <div style={{marginTop:"3rem"}}>
          {users && 
          
          filteredBySearch.length===0 && searchData.length ? <p style={{color:"red", fontSize:"2rem"}}>No searched user found</p> : 
          filterByGender.length>=1 ? filterByGender
            
            .map((ele) => (
              <div key={ele && ele.id} className={`card w-50 mx-auto my-2 user-card`}>
                <div className={`card-body`}>
                  <h5 className="card-title">{ele && ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{ele && ele.email}</h6>
                  <p className="card-text">{ele && ele.gender}</p>
                  <div className='three-button'>
                    <button
                        className="card-link"
                        onClick={()=>[setId(ele.id),setShowPopup(true)]}
                      >
                        View
                      </button>
                      <NavLink to={`/edit/${ele && ele.id}`} className="card-link">
                        <button>Edit</button>
                      </NavLink>
                      <NavLink
                      onClick={()=>dispatch(deleteUser(ele.id))}
                      className="card-link">
                        <button>Delete</button>
                      </NavLink>
                  </div>
                </div>
              </div>
            )) : <p style={{color:"red", fontSize:"2rem"}}>No user in this section</p>
          }
        </div>
      </div>
  )
}

export default Read
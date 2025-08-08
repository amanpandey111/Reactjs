import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { searchUser, setDropdown } from '../features/UserDetailSlice'

const Navbar = () => {
    const allusers = useSelector((state)=>state.app.users)
    const[searchData,setSearchData] = useState("")
    const dispatch = useDispatch()
    //! see if we want continuous search functionaly then for evry time input change need to dispatch in store
    // useEffect(()=>{
    //     dispatch(searchUser(searchData))
    // },[searchData])
    // console.log(searchData);
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(searchUser(searchData))
        setSearchData("")
    }
  return (
    <section>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">RTK</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                       <NavLink to="/" className="nav-link active" aria-current="page" href="#">Create Post</NavLink>
                    </li>
                    <li className="nav-item">
                       <NavLink to="/read" message="alldetail" className="nav-link" 
                        onClick={(e)=>{e.stopPropagation();dispatch(setDropdown("global"));dispatch(searchUser(""))}}>
                        All Post {allusers.length}
                       </NavLink>
                    </li>
                </ul>
                <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchData}
                     onChange={(e)=>setSearchData(e.target.value)}
                     
                     />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar
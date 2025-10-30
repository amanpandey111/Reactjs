import { NavLink, Outlet, useSearchParams } from 'react-router-dom'
import logo from '../assets/logo.webp'
import './day1.css'

function LayoutRoute() {
  const [searchParams, setSearchParams] = useSearchParams({ category: "clothes", sort: "price_asc" });
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  console.log(category, sort);
  return (
    <div>
      <div className="navbar" >
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul>
            <li> <NavLink to='/' >Home</NavLink> </li>
            <li><NavLink to='/electronic' >Electronic</NavLink></li>
            <li><NavLink to='/women' >Women Clothes</NavLink></li>
            <li><NavLink to='/men' >Men Clothes</NavLink></li>
            <li><NavLink to='/child' >Children Clothes</NavLink></li>
            <li><NavLink to='/user/12' >Get UserId</NavLink></li>
          </ul>
        </div>
        <div className='nav-button' >
          <button>Sign Up</button>
          <button>Sign In</button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <button onClick={() => setSearchParams({ category: "mobile", sort: "price_asc" })}>
          Filter Mobiles (Sort by Price)
        </button>
        <button onClick={() => setSearchParams({})}>
          Clear Filters
        </button>
      </div>
    </div>
  )
}
export default LayoutRoute
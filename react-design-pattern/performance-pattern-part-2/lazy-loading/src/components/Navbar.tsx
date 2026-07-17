import { Outlet, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path;
  return (
    <div>
      <div
        className="flex border w-[100%] md:w-[75%] lg:w-[55%] m-auto justify-between items-center px-6 py-1 mt-5 rounded-2xl"
      >
        <p
          className={`cursor-pointer ${isActive('/') ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
          onClick={() => navigate('/')}
        >
          Home
        </p>
        <p
          className={`cursor-pointer ${isActive('/about') ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
          onClick={() => navigate('/about')}
        >
          About
        </p>
        <p
          className={`cursor-pointer ${isActive('/contact') ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
          onClick={() => navigate('/contact')}
        >
          Contact
        </p>
        <p
          className={`cursor-pointer ${isActive('/signin') ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
          onClick={() => navigate('/signin')}
        >
          Sign in
        </p>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar;

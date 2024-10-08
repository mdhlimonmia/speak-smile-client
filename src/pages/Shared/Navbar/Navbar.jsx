import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handelLogOut = () =>{
    logOut()
    .then(() => {})
   
  }
  const navItems = (
    <div className="flex text-white">
      <li><Link to='/' >Home</Link></li>
      <li><Link to='/instructor' >All Instructor</Link></li>
      <li><Link to='/courses' >Our Course</Link></li>
      {
        user? <><li><Link to='/dashboard' >Dashboard</Link></li></> : <></>
      }
      {
        user? <> <li><button onClick={handelLogOut}>Logout</button></li> </> : <><li><Link to='/login' >Login</Link></li></>
      }
      {
        user? <><li><button>{user.displayName}</button></li></> : <></>
      }
    </div>
  )
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-blue-400 font-bold font-serif">SpSmile</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/courses' className="btn text-white bg-blue-500">Enroll Now</Link>
      </div>
    </div>
  );
};

export default Navbar;

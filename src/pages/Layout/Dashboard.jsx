import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Dashboard = () => {
  const {user} = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]) ;
  useEffect(() => {
    fetch("https://speak-smile-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);
  const currentStatus = allUsers.find(k => k?.email === user?.email)?.status;
  // console.log(currentStatus);
    const admin = (
        <>
        <li>
            <Link to='admin'>Admin Home</Link>
          </li>
          <li>
            <Link to='manageuser'>Manage Users</Link>
          </li>
          <li>
            <Link to='managecourse'>Manage Course</Link>
          </li>
        </>
    );
    const instructor = (
        <>
        <li>
            <Link to= 'instructor'>Instructor Home</Link>
          </li>
          <li>
            <Link to='addcourse'>Add a Course</Link>
          </li>
          <li>
            <Link to='mycourses'>My Course</Link>
          </li>
        </>
    );
    const student = (
        <>
        <li>
            <Link>Student Home</Link>
          </li>
          <li>
            <Link>My Selected Course</Link>
          </li>
          <li>
            <Link>My Course</Link>
          </li>
          <li>
            <Link>My Enrolled Course</Link>
          </li>
        </>
    );
    const navItem = (
        <>
        <li><Link to='/' >Home</Link></li>
        </>
    )
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  first-letter:
      
       justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn bg-blue-500 drawer-button lg:hidden  text-white"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side  text-white font-bold  bg-gray-700">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full">
        <div className="text-blue-500 pt-4 p-4 text-2xl">
            <p className="text-2xl uppercase">Speak Smile</p>
            
        </div>
          {/* Sidebar content here */}
          { currentStatus === 'admin' &&  admin}
          { currentStatus === 'instructor' &&  instructor}
          { currentStatus === 'student' &&  student}
          
          <hr className="m-2 "  />
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

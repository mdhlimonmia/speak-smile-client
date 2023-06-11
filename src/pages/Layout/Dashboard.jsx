import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const admin = (
        <>
        <li>
            <Link>Admin Home</Link>
          </li>
          <li>
            <Link>Manage Course</Link>
          </li>
          <li>
            <Link>Manage Users</Link>
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
            <Link to='mycourse'>My Course</Link>
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
      <div className="drawer-content flex flex-col items-center justify-center">
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
          {admin}
          {instructor}
          {student}
          <hr className="m-2 "  />
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import AllInstructors from "../AllInstructors/AllInstructors";
import OurCourses from "../OurCourses/OurCourses";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import InstructorHome from "../Dashboard/Instructor/InstructorHome/InstructorHome";
import AddCourse from "../Dashboard/Instructor/AddCourse/AddCourse";
import MyCourses from "../Dashboard/Instructor/MyCourses/MyCourses";
import AdminHome from "../Dashboard/AdminHome/AdminHome/AdminHome";
import ManageUser from "../Dashboard/AdminHome/ManageUser/ManageUser";
import ManageCourse from "../Dashboard/AdminHome/ManageCourse/ManageCourse";
import Payment from "../Dashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <OurCourses></OurCourses>,
      },
      {
        path: "/instructor",
        element: <AllInstructors></AllInstructors>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'instructor',
        element: <PrivateRoute><InstructorHome></InstructorHome></PrivateRoute>
      },
      {
        path: 'addcourse',
        element: <PrivateRoute><AddCourse></AddCourse></PrivateRoute>
      },
      {
        path: 'mycourses',
        element: <PrivateRoute><MyCourses></MyCourses></PrivateRoute>
      },
      {
        path: 'admin',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'manageuser',
        element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
      },
      {
        path: 'managecourse',
        element: <AdminRoute><ManageCourse></ManageCourse></AdminRoute>
      },
      {
        path: 'payment',
        element: <PrivateRoute><Payment></Payment></PrivateRoute>
      }
    ]
  }
]);

export default router;

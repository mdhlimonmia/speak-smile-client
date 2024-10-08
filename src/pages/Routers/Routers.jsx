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
import SelectedCourses from "../Dashboard/Student/SelectedCourses/SelectedCourses";
import MyAllCourses from "../Dashboard/Student/MyAllCourses/MyAllCourses";
import Page4o4 from "../Page404/Page404";
// import AdminRoute from "./AdminRoute";

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
        element: <PrivateRoute><AdminHome></AdminHome></PrivateRoute>
      },
      {
        path: 'manageuser',
        element: <PrivateRoute><ManageUser></ManageUser></PrivateRoute>
      },
      {
        path: 'managecourse',
        element: <PrivateRoute><ManageCourse></ManageCourse></PrivateRoute>
      },
      {
        path: 'payment/:id',
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
        loader: ({params})=>fetch(`https://speak-smile-server.vercel.app/course/${params.id}`)
      },
      {
        path: 'selected',
        element:<PrivateRoute><SelectedCourses></SelectedCourses></PrivateRoute>
      },
      {
        path: 'myallcourses',
        element: <PrivateRoute><MyAllCourses></MyAllCourses></PrivateRoute>
      }
    ]
  },
  {
    path: '*',
    element: <Page4o4></Page4o4>
  }
]);

export default router;

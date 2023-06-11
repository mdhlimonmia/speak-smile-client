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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'instructor',
        element: <InstructorHome></InstructorHome>
      },
      {
        path: 'addcourse',
        element: <AddCourse></AddCourse>
      },
      {
        path: 'mycourses',
        element: <MyCourses></MyCourses>
      }
      
    ]
  }
]);

export default router;

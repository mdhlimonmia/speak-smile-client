import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import AllInstructors from "../AllInstructors/AllInstructors";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: 'instructor',
          element: <AllInstructors></AllInstructors>
        }
      ]
    },
  ]);

  export default router;
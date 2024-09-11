import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../layout/Main";
import Error from "../shared/Error";
import Home from "../pages/Home/Home";
import ApplicationForm from "../pages/ApplicationForm/ApplicationForm";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/applicationForm",
            element: <ApplicationForm/>
        },
      ]
    }
]);

export default router;

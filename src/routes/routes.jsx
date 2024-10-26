import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Singup/Signup";
import Address from "../components/Address/Address";
import Payment from "../components/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signup/address",
    element: <Address />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

export default router;

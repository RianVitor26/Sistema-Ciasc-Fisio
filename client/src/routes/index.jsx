
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Login } from "../pages/Login";
import { ForgetPassword } from "../pages/ForgetPassword";
import { SignUp } from "../pages/SignUp";
import { Menu } from "../pages/Menu";

const Private = ({ Item }) => {
  const signed = false;
  return signed > 0 ? <Item /> : <Signin />
}

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/menu" element={ <Private item={Menu}></Private>}/>
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
};
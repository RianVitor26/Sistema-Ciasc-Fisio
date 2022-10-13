
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Login } from "../pages/Login";
import { RegisterEmployees } from "../pages/RegisterEmployees";
import { ForgetPassword } from "../pages/ForgetPassword";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registeremployees" element={<RegisterEmployees />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
};
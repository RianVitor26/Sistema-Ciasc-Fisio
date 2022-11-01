
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { SignIn } from "../pages/SignIn";
import { ForgetPassword } from "../pages/ForgetPassword";
import { RedefinePassword } from "../pages/ForgetPassword/RedefinePassword";
import { SignUp } from "../pages/SignUp";
import { Menu } from "../pages/Menu";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route
          path="/forgetpassword/redefinepassword"
          element={<RedefinePassword />}
        />
      </Routes>
    </Router>
  );
};
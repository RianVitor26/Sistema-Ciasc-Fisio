
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { SignIn } from "../pages/SignIn";
import { ForgetPassword } from "../pages/ForgetPassword";
import { RedefinePassword } from "../pages/ForgetPassword/RedefinePassword";
import { SignUp } from "../pages/SignUp";
import { Menu } from "../pages/Menu";
import { PatientRegistration } from './../pages/PatientRegistration';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/patientregistration" element={<PatientRegistration />} />
        <Route
          exact
          path="/forgetpassword/redefinepassword"
          element={<RedefinePassword />}
        />
      </Routes>
    </Router>
  );
};
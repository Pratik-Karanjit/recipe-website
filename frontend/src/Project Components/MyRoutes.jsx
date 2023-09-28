import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Recipe from "./Recipe";
import Favourites from "./Favourites";
import QuickBites from "./QuickBites";
import HomePage from "./HomePage";
import HOE from "./HOE";
import RegistrationSuccessPage from "./RegistrationSuccessPage";
import VerifyEmailPage from "./VerifyEmail";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ForgotPassVerification from "./ForgotPassVerification";
import ForgotPasswordReset from "./ForgotPasswordReset";
import MyProfile from "./MyProfile";
import UpdateProfile from "./UpdateProfile";
import ChangeEmail from "./ChangeEmail";
import ChangeEmailVerification from "./ChangeEmailVerification";
import ChangeEmailPage from "./ChangeEmailPage";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route
            index
            element={
              <div>
                <HomePage></HomePage>
                {/* <HOE></HOE> */}
              </div>
            }
          ></Route>
        </Route>
        <Route
          path="/recipe"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route
            index
            element={
              <div>
                <Recipe></Recipe>
              </div>
            }
          ></Route>
        </Route>
        <Route
          path="quick-bites"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route
            index
            element={
              <div>
                <QuickBites></QuickBites>
              </div>
            }
          ></Route>
        </Route>
        <Route path="favourites" element={<div> <Outlet></Outlet></div>}>
          <Route index element={<div> <Favourites></Favourites></div>}></Route>
        </Route>
        <Route path="registration-success" element={<RegistrationSuccessPage></RegistrationSuccessPage>} />
        <Route path="verify-email" element={<VerifyEmailPage />}querystring/>
        <Route path = "login" element = {<Login></Login>}></Route>
        <Route path = "forgot-password" element = {<ForgotPassword></ForgotPassword>}></Route>
        <Route path = "forgot-password-verification" element = {<ForgotPassVerification></ForgotPassVerification>}></Route>
        <Route path="forgot-password-reset" element={<ForgotPasswordReset></ForgotPasswordReset>}querystring/>
        <Route path = "my-profile" element = {<MyProfile></MyProfile>}></Route>
        <Route path = "update-my-profile" element = {<UpdateProfile></UpdateProfile>}></Route>
        <Route path ="change-email" element = {<ChangeEmail></ChangeEmail>}></Route>
        <Route path ="change-email-verification" element = {<ChangeEmailVerification></ChangeEmailVerification>}></Route>
        <Route path ="change-email-page" element = {<ChangeEmailPage></ChangeEmailPage>}></Route>


      </Routes>
    </div>
  );
};

export default MyRoutes;

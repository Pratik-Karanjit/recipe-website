import { Router } from "express";
import { createUser, forgetPassword, loginUser, myProfile, resetPassword, updateEmail, updateEmailPage, updateMyProfile, verifyEmail } from "../controller/userController.js";
import isAuthenticatedForEmail from "../middleware/isAuthenticatedForEmail.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

let userRouter = Router();


userRouter.route("/").post(createUser)

userRouter.route("/verify-email").post(isAuthenticatedForEmail,verifyEmail);

userRouter.route("/login").post(loginUser);

userRouter.route("/forgot-password").get(forgetPassword);

userRouter.route("/reset-password").patch(isAuthenticatedForEmail,resetPassword);

userRouter.route("/my-profile").get(isAuthenticated,myProfile);

userRouter.route("/update-my-profile").patch(isAuthenticated, updateMyProfile);

userRouter.route("/change-email").patch(isAuthenticatedForEmail, updateEmail);

userRouter.route("/change-email-page").patch(isAuthenticatedForEmail, updateEmailPage);



export default userRouter;

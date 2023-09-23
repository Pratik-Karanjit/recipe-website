import { Router } from "express";
import { createUser, forgetPassword, loginUser, resetPassword, verifyEmail } from "../controller/userController.js";
import isAuthenticatedForEmail from "../middleware/isAuthenticatedForEmail.js";

let userRouter = Router();


userRouter.route("/").post(createUser)

userRouter.route("/verify-email").post(isAuthenticatedForEmail,verifyEmail);

userRouter.route("/login").post(loginUser);

userRouter.route("/forgot-password").get(forgetPassword);

userRouter.route("/reset-password").patch(isAuthenticatedForEmail,resetPassword);

export default userRouter;

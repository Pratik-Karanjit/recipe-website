import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import { secretKey } from "../config/constant.js";

export let verifyToken = expressAsyncHandler(async (token) => {
  let infoObj = await jwt.verify(token, secretKey);
  return infoObj;
});

export let generateToken = expressAsyncHandler(async (infoObj, expireInfo) => {
  let token = await jwt.sign(infoObj, secretKey, expireInfo);
  return token;
});

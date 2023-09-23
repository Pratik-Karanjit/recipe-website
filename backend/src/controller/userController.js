import { HttpStatus, baseUrl } from "../config/constant.js";
import expressAsyncHandler from "express-async-handler";
import { sendMail } from "../utils/sendMail.js";
import { comparePassword, hashPassword } from "../utils/hashing.js";
import { generateToken, verifyToken } from "../utils/token.js";
import { Token, User } from "../schema/model.js";
import successResponse from "../helper/SuccessResponse.js";

export let createUser = expressAsyncHandler(async (req, res, next) => {
    let data = req.body;                                 
    data.isVerify = false                               
    data.isDeactivate = false                                 
    let email = data.email                                  
    let user = await User.findOne({ email:email });       
    
    if (user) {                                             
      let error = new Error("Duplicate email.");              
      error.statusCode = 409;
      throw error;
    }else{                                                 
      let _hashPassword = await hashPassword(data.password);
    data.password = _hashPassword;
    let result = await User.create(req.body);
    delete result._doc.password;                            
    let infoObj = {                                         
      id: result._id,
    };
    let expireInfo = {
      expiresIn: "1d",
    };
    let token = await generateToken(infoObj, expireInfo);   
    await Token.create({ token });
    let link = `${baseUrl}/verify-email?token=${token}`   
    await sendMail({
      from: '"Pakau" <pakau@gmail.com>',       
      to: [data.email],
      subject: "Email verification",
      html: `<h1>
      Verify Email 
      <a href = "${link}">Click to verify</a>               
      <h1>`,
    });
  
    successResponse(res, HttpStatus.CREATED, "User created successfully", result);
    }
  });


  export let readAllUser = expressAsyncHandler(async (req, res, next) => {
    try {
      let result = await User.find({ name: "pratik" });
  
      successResponse(res, HttpStatus.OK, "Read User  successfully", result);
    } catch (error) {
      errorResponse(res, HttpStatus.BAD_REQUEST, error.message);
    }
  });


  export let verifyEmail = expressAsyncHandler(async (req, res, next) => {
    let id = req.info.id;   
    let tokenId = req.token.tokenId  
    let result = await User.findByIdAndUpdate(    
      id,
      { isVerify: true }, 
      { new: true }       
    );
    await Token.findByIdAndDelete(tokenId)  
  
    successResponse(
      res,
      HttpStatus.CREATED,
      "Email verified successfully.",
      result
    );
  });


  export let loginUser = expressAsyncHandler(async (req, res, next) => {
    let email = req.body.email;       
    let password = req.body.password; 
    let data = await User.findOne({ email: email }); 
    if(data.isDeactivate) {
      await User.findByIdAndUpdate(data._id, {isDeactivate: false}); 
     }
  
    if (!data) {                     
      let error = new Error("Credential doesn't match");
      error.statusCode = 401;
      throw error;
    } else 
    {
      let isValidPassword = await comparePassword(password, data.password); 
      if (!isValidPassword) {                      
        let error = new Error("Credential doesn't match");
        error.statusCode = 401;
        throw error;
      } else {
        if (!data.isVerify) {              
  
          let error = new Error("Please Verify Your Account First.");
          error.statusCode = 401;
          throw error;
        } else {                 
          let infoObj = {
            id: data._id,
            role: data.role,
          };
          let expireInfo = {
            expiresIn: "365d",
          };
          let token = await generateToken(infoObj, expireInfo);    
          await Token.create({ token });            
          res.json({ token }); 
          successResponse(res, HttpStatus.CREATED, "Login Successfully", token);
        }
      }
    }
  });

  export let forgetPassword = expressAsyncHandler(async (req, res, next) => {       
    let email=req.query.email       
    let data= await User.findOne({email})   
    let infoObj = {                            
      id: data._id,                            
      role: data.role,
    };
    let expireInfo = {                      
      expiresIn: "1d",
    };
  
    let token = await generateToken(infoObj,expireInfo)   
     await Token.create({token})                            
     let link = `${baseUrl}/forgot-password-reset?token=${token}`  
     await sendMail({
      from: '"Pakau" <Pakau@gmail.com>',       
      to: [data.email],
      subject: "Email verification",
      html: `<h1>
      Verify Email 
      <a href = "${link}">Click to verify</a>               
      <h1>`,
    });
    successResponse(res, HttpStatus.OK, "Mail sent successfully");
  });


  export let resetPassword = expressAsyncHandler(async (req, res, next) => {
    let id = req.info.id; 
    let tokenId = req.token.tokenId; 
    let newPassword = await hashPassword(req.body.password);
    await User.findByIdAndUpdate(id, { password: newPassword }, { new: true }); 
    await Token.findByIdAndDelete(tokenId); 
    successResponse(res, HttpStatus.OK, "Password updated successfully");
  });
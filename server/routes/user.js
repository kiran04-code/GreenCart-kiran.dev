import express from "express"
import {handleLoginWithGoogle, handleLogin, hnadleUserSignup} from "../controller/user.js"
const userroutes = express.Router()
userroutes.post("/Singup",hnadleUserSignup)
userroutes.post("/Signin",handleLogin)
userroutes.post("/GoogleLogin",handleLoginWithGoogle)
export default userroutes
import express from "express"
import {handleLoginWithGoogle, handleLogin, hnadleUserSignup,logout,authcheck} from "../controller/user.js"
const userroutes = express.Router()
userroutes.post("/Singup",hnadleUserSignup)
userroutes.post("/Signin",handleLogin)
userroutes.post("/GoogleLogin",handleLoginWithGoogle)
userroutes.get("/logout",logout)
userroutes.get("/authcheck",authcheck)
export default userroutes
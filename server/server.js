
import  express from "express"
import  connectionwithDB  from "./config/db.js"
import dotenv from "dotenv"
import userroutes from "./routes/user.js"
import cors from "cors"
dotenv.config()
const app = express()
import cookieParser from "cookie-parser"
import { checkAuth } from "./middleware/user.js"
// const allOrigies = ["http://localhost:5173/"]
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
app.use(checkAuth("token_user_login"))
connectionwithDB(process.env.MONGODB_URL).then(()=>{
  console.log("mongodb is Connected")
}).catch((err)=>{
    console.log("ERROR",err)
})
const port =  process.env.PORT  || 6002
app.get("/api/status",(req,res)=>{
    res.send("Server is Working! with 200  Status Code")
})
app.get("/checkAuth",(req,res)=>{
    res.json({
        user:req.body.user
    })
})
app.use("/api",userroutes,)
app.listen(port,(req,res)=>{
    console.log(`Server is running on port http://localhost:${port}`)
})
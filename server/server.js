
import  express from "express"
import  connectionwithDB  from "./config/db.js"
import dotenv from "dotenv"
import routes from "./routes/user.js"
import cors from "cors"
dotenv.config()
const app = express()
const allOrigies = ["http://localhost:5173/"]
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:allOrigies,
    credentials:true
}))
connectionwithDB(process.env.MONGODB_URL).then(()=>{
  console.log("mongodb is Connected")
}).catch((err)=>{
    console.log("ERROR",err)
})
const port =  process.env.PORT  || 6002
app.get("/api/status",(req,res)=>{
    res.send("Server is Working! with 200  Status Code")
})
app.use("/api",routes)
app.listen(port,(req,res)=>{
    console.log(`Server is running on port http://localhost:${port}`)
})
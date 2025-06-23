
import  express from "express"
import  connectionwithDB  from "./config/db.js"
import dotenv from "dotenv"
dotenv.config()
const app = express()
connectionwithDB(process.env.MONGODB_URL).then(()=>{
  console.log("mongodb is Connected")
}).catch((err)=>{
    console.log("ERROR",err)
})
const port =  process.env.PORT  || 6002
app.get("/api/status",(req,res)=>{
    res.send("Server is Working! with 200  Status Code")
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on port http://localhost:${port}`)
})
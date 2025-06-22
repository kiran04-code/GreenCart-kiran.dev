const express = require("express")

const app = express()

const port = 6002
app.get("/api/status",(req,res)=>{
    res.send("Server is Working! with 200  Status Code")
})
app.listen(port,(req,res)=>{
    console.log(`Server is running on port http://localhost:${port}`)
})
import express from "express"
import { sellerLogin,sellerLogout } from "../controller/seller.js"
const sellerRoute = express.Router()
sellerRoute.post("/sellerlogin",sellerLogin)
sellerRoute.get("/sellerLogout",sellerLogout)

export default sellerRoute
import express from "express";
import { addproduct, changeStock, ProductById, productList } from "../controller/product";

const productRoute = express.Router()
productRoute.post("/addproduct",addproduct)
productRoute.get("/productList",productList)
productRoute.get("/ProductById",ProductById)
productRoute.get("/changeStock",changeStock)


export default productRoute
import { v2 as cloudinary } from "cloudinary"
import Product from "../model/product.js"
// add all products /products
export const addproduct = async (req, res) => {
    try {
        let productData = JSON.parse(req.body.productData)
        const image = req.files
        let imageUrl = await Promise.all(
            image.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" })
                return result.secure_url
            })
        )

        await Product.create({ ...productData, image: imageUrl })
        res.json({
            success: true,
            message: "product Add"
        })
    } catch (error) {
        console.log(error.message)
        res.json({ success: true, message: error.message })
    }
}
//  get product list /product/list
export const productList = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json({ success: true, products })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}
// get prodyuct By Id  product/id
export const ProductById = async (req, res) => {
    try {
        const { id } = req.body
        const product = await Product.findById({ id })
        res.json({
            success: true, product
        })

    } catch (error) {
        console.log(error.message)
        res.json({
            success: false
        })
    }
}
// change the stock --- / product/stock
export const changeStock = async (req, res) => {
    try {
        const { id, inStock } = req.body
        const product = await Product.findByIdAndUpdate(id, { inStock })
        res.json({ success: true, product ,message:"Stock Updated"})
    } catch (error) {
        console.log(error.message)
        res.json({
            success: false,
            message: error.message
        })
    }
}
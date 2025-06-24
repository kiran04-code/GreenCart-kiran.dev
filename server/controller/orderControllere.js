// place  order-cod-online-pyment

import Order from "../model/ordersmode.js"
import Product from "../model/product.js"

export const placeOrdersCOD = async(req,res)=>{
  try {
    const userId = req.user
    const {items,address} = req.body
    if(!address || items.length===0){
        res.json({
            success:false,
            message:"missing Details"
        })
    }

    let amount = await items.reduce(async(acc,currval)=>{
         let product = await Product.findById(currval.product)
         return(await acc) + product.offerPrice*items.quantity
    },0)
    amount+= Math.floor(amount*2/100)
    const placeOrdersCODs = await Order.create({
        userId,items,address,amount,paymentType:"COD"
    })
    res.json({
        success:true ,placeOrdersCODs,message:"order placed SucessFull!"
    })
  } catch (error) {
    console.log(error.message)
    res.json({
        success:false
    })
  }
}

// get User-by uSERiD 
export const getorderofuser = async(req,res)=>{
  try {
    const userId = req.user
    const dataOrder  = await Order.find({userId ,$or:[{paymentType:"COD"},{isPaid:true}]}).populate("items.Product ,address").sort({createdAt:-1})
    res.json({
      success:true,
      message:"getUserOrder!",
      dataOrder
    })
  } catch (error) {
    console.log(error.message)
    res.json({
      success:true,
      message:error.message
    })
  }
}

// order/admin/seller
export const allorderData = async(req,res)=>{
 try {
  const orders = await Order.find({$or:[{paymentType:"COD"},{isPaid:true}]}).populate("items.Product").sort({createAt:-1})
  res.json({
    success:true,
    message:"get all orderds Data for Admin",
    orders
  })
 } catch (error) {
  res.json({
    success:false,
    message:error.message
  })
 }
}
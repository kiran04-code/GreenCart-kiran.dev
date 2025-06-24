// place  order-cod-online-pyment

import Order from "../model/ordersmode"
import Product from "../model/product"


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


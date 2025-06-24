import user from "../model/user.js"

// updated the cart data 
 export const updateCart = async(req,res)=>{
 try {
    const {userId,cartItems}  = req.body 
    const  result = await user.findByIdAndUpdate(userId,{cartItems})
    res.json({success:true,message:"Cart Updated"})
 } catch (error) {
    console.log(error.message)
    res.json({
        success:true,
        message:error.message
    })
 }
 }
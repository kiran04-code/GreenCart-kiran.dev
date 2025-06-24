import mongoose from "mongoose"

const userShema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    email:{
        require:true,
        type:String,

    },
    password:{
        type:String,
        require:true
    },
    cartItem: {
  type: [String],
  default: []
}

})

const user =  mongoose.models.user ||mongoose.model("user",userShema)

export default user
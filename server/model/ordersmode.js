import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    userId: {
       type:mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    items: [{
        product:{type:String,require:true,ref:"Product"},
        quantity:{type:String,require:true,}
    }],
    amount: {
      type: Number,
      required: true,
    },
    address: {type:mongoose.Schema.Types.ObjectId,ref:"Address",require:true},
    status: {
      type: String,
      default: "Order Placed",
    },
    paymentType: {
      type: String,
      enum: ["Online", "COD"],
      default: "Online",
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;

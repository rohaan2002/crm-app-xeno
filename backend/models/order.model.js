import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required :true
    },
    amount:{
        type: Number,
        default: 0
    },
    orderDate:{
        type: Date,
        default: new Date()
    },
    orderType: {
        type: String,
        enum: ["Service","Product","Other"],
        required: true
    }
})


const Order = mongoose.model("Order", orderSchema)
export default Order;
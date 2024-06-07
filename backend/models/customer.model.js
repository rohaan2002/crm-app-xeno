import mongoose from "mongoose";
const customerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
 totalSpending: {
    type: Number,
    default: 0
 },
 totalVisits: {
    type: Number,
 },
 lastVisit: {
    type: Date,
    default: new Date()
 }

}, {timestamps:true}  
);

const Customer = mongoose.model("Customer", customerSchema); 

export default Customer;
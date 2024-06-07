import Customer from "../models/customer.model.js";
import Order from "../models/order.model.js";
import bcrypt from 'bcryptjs'
export const createCustomer=async(req,res)=>{
    try{
        const {fullName, userName, password, lastVisit, totalSpending, totalVisits } = req.body

        const cust = await Customer.findOne({userName})

        if(cust){
            return res.status(400).json({error: "Customer with this username already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt)

        const newCust = new Customer({
            fullName,
             userName,
             password: hashedPass,
             lastVisit,
             totalSpending,
             totalVisits
          
        })

        await newCust.save();

        res.status(201).json({
            data: newCust,
            message: "Customer ingested successfully"
        })

    }catch(err){
        res.status(500).json({error: `Error creating customer- ${err.message}`})
    }



}
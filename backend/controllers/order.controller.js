import Order from "../models/order.model.js";
import Customer from "../models/customer.model.js";

export const createOrder=async(req,res)=>{
    
    try{
        const {orderingUser, amount , orderDate, orderType } = req.body;

        
        const user = await Customer.findOne({userName: orderingUser})
        
        const userId = user._id;
        user.totalSpending += parseInt( amount);
        user.totalVisits+=1;

        const newOrder = new Order({
            customerId: userId,
            amount,
            orderDate,
            orderType
        })

        await Promise.all([newOrder.save(), user.save()])

        res.status(201).json({message: "Order ingested successfully!"});

        }catch(err){
        res.status(500).json({error: `Error creating orders!- ${err.message}`})
    }
}
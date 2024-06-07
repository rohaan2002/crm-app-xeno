import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectToMongoDb from './db/connectToMongoDb.js';
import customerRoute from './routes/customer.routes.js'
import orderRoute from './routes/order.routes.js'
dotenv.config(); 

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/api/customer",customerRoute)
app.use("/api/order",orderRoute)
// app.get('/', (req, res) => {
//   res.json('Hey this crm has started')
// })

app.listen(PORT, ()=> {
    connectToMongoDb();
    console.log(`Server up and running on port ${PORT}`);
}
)
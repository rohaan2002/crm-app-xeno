import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectToMongoDb from './db/connectToMongoDb.js';
dotenv.config(); 

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json('Hey this crm has started')
})

app.listen(PORT, ()=> {
    connectToMongoDb();
    console.log(`Server up and running on port ${PORT}`);
}
)
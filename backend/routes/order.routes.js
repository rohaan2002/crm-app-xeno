import express from 'express'
const router = express.Router();
import Order from '../models/order.model.js';
import { createOrder } from '../controllers/order.controller.js';


router.post('/create', createOrder);

export default router; 

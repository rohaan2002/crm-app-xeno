import express from 'express'
const router = express.Router();
import Customer from '../models/customer.model.js';
import { createCustomer } from '../controllers/customer.controller.js';


router.post('/create', createCustomer);

export default router;
import dotenv from 'dotenv';
import connectDB from './connect/db.js';
import express from 'express';
import User from './routes/customer.js'

import { errorHandler } from './middlewares/errorMiddleware.js';
dotenv.config();
import cors from 'cors'
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())



app.use('/api/customers',User);




app.use(errorHandler);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
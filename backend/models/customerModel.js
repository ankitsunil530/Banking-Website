import mongoose from "mongoose";

const customer = new mongoose.Schema({
    customer_name:{
        type: String,
        required: true,
    },
    customer_street:{
        type: String,
        required: true,
    },
    customer_city:{
        type: String,
        required: true,
    },
});


export default mongoose.model('Customer',customer,'customer');
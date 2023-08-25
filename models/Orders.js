const mongoose = require("mongoose");
//destructuring for data
const {Schema} = mongoose;

const OrderSchema = new Schema({
    email:{
        type:String,
        required:true,
        
        // unique:true
    },
    order_data:{
        type:Array,
        required:true
    },
    order_date:{
        type:Date,
    }
})

module.exports = mongoose.model("order",OrderSchema);
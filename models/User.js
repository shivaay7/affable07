const mongoose = require("mongoose");
//destructuring for data
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
});

//user naam ka collection create ho jayega or Schema pass hogi jo ki wrapper ki tarah work karega as a model!
module.exports = mongoose.model("user", UserSchema);
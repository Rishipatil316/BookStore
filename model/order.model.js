import mongoose, { Mongoose } from "mongoose";

const OrderSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, required:true, ref:"user"},
    book:[{type:mongoose.Schema.Types.ObjectId, required:true, ref:"Book"}],
    totalPrice :{type:Number,required:true},
    status:{type:String,enum:["placed", "shipped", "delivered","cancelled"],default:"user"},
    role:{type:String, enum:['user','admin'], default:'user'}
    
})

const Order = new mongoose.model('Order',OrderSchema);
export default Order;
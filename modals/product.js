import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  
    image:String,
    Title:String,
    Price: String,
    

    // isAdmin:{
    //     type: Boolean,
    //     default:false
    // }
},
{timestamps:true});

export default mongoose.model("product",productSchema);
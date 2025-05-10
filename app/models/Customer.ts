import mongoose from "mongoose"

const CustomerSchema = new mongoose.Schema({
  full_name: {
    type:String,
    // required:true 
  },
  adress: {
    type:String,
    // required:true
  },
  phone: {
    type:String,
    // required:true,
    
  },
  product: {
    type:String,
    // required:true,
    
  },
  quantity: {
    type:String,
    // required:true,
    
  },
  weight: {
    type:String,
    // required:true,
    
  },
  total_price: {
    type:String,
    // required:true,
    
  },
},
{ 
  timestamps: {
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  }
}
);

export default mongoose.models.Customer || mongoose.model("Customer",CustomerSchema)
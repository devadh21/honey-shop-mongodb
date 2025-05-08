import mongoose from "mongoose"


const ProductSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true 
  },
  price: {
    type:String,
    required:true
  },
  old_price: {
    type:String,
    required:true,
    
  },
  half_kg: {
    type:String,
    required:true,
    
  },
  img_url: {
    type:String,
    required:true,
    
  },
},
{ 
  timestamps: {
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  }
}
);

export default mongoose.models.Product || mongoose.model("Product",ProductSchema)
import mongoose from "mongoose"
import bcrypt from "bcryptjs" 

const UserSchema = new mongoose.Schema({
  user_name: {
    type:String,
    required:true
  },
  email: {
    type:String,
    required:true
  },
  password: {
    type:String,
    required:true,
    minLength:8,
  },
  roles:{
    type:String,
    enum:["admin","user"],
    default:"user"
  }
},
{ 
  timestamps: {
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  }
}
);
UserSchema.pre('save', async function (next) {
    if(!this.isModified("password")){
        next();
    }    
    this.password = await bcrypt.hash(this.password, 10);
})

export default mongoose.models.User || mongoose.model("User",UserSchema)
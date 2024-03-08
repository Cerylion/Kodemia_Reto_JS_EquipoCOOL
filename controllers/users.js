const mongoose=require("mongoose")

const userschema = mongoose= new mongoose.Schema({
  user:{ type:String,
          required:true,
          match:[/^[A-Za-z/]$/,"Usuario no valido"]
},

email:{
    type:String,
          required:true,
          unique:true,
          match:[/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,"Email no valido"]
},

password:{
    type:String,
          required:true,
    
}
},
{
    timestamps:true
}
)

const User = mongoose.model()

module.exports=User
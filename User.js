const mongoose= require('mongoose');

const {Schema}=mongoose;
const UserSchema=new Schema({
    name:String ,
    age:Number,
})

const User= mongoose.model('User', UserSchema)
module.exports=User
const mongoose= require('mongoose');

const {Schema}=mongoose;
const UserSchema=new Schema({
    name:String ,
    age:Number,
    present:Boolean,
})

const Student= mongoose.model('Student', UserSchema)
module.exports=Student

const express = require("express");
const mongoose= require('mongoose');
const Student = require("./Student");

const app = express();
const url = 'mongodb://127.0.0.1:27017/student'

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})
const user2 =new User({ name: "Amine", age: 18 });
 const user =new User({ name: "John", age: 18 });
//save it 
user2.save((error) => {
if (error) {
return console.log(`Error has occurred: ${error}`);
  }  
console.log('Document is successfully saved.');
});


User.find({}, function (error, documents) {
    console.log(documents);
  });
 
    
  
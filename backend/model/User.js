const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

let User = new Schema({
  username: {
    type: String,
    required : true
  },
  fname: {
    type: String,
    required : true
  },
  lname: {
    type: String,
    required : true
  },
  email: {
    type: String,
    required : true ,
    unique : true,
    validator(value)
    {
      console.log(value);
      if(!validator.isEmail(value))
      {
        
        throw new Error("Email is invalid");
      }
    }

  },

  phone: {
    type: Number,
    required : true
  },
  date: {
    type: Date,
    required : true
  },
  userId: {
    type: String,
    required : true
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
   // required:true
  
  },
 

}, {
  collection: 'users'
})



module.exports = mongoose.model('User', User)
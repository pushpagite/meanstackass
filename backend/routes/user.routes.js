const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");

const { check, validationResult } = require("express-validator/check");

const userRoute = express.Router();
let User = require('../model/User');
//const { check } = require('express-validator');
const db = require('../database/db');
var ObjectId = require('mongoose').Types.ObjectId;

//post data
// userRoute.route('/add-user').post((req, res, next) => {
//     User.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   });
// });


//try post with hash
userRoute.route('/add-user').post((req, res, next) => {
  User.create(req.body, async (error, data) => {
  if (error) {
    return next(error)
  } else {    
    data.password= await bcrypt.hashSync(data.password,10);
    data.save();
      res.send({
        username:data.username,
        fname : data.fname,
        lname : data.lname,
        email: data.email,
        phone: data.phone,
        date:data.date,
       userId:data.userId,
       gender:data.gneder,
       password:data.password,
       file:data.file,
     })
  }
});
})





//Hashing Password
//  userRoute.route('/add-user').post((req, res, next) => {
  
//    User.create(req.body,async (error, data) => {
    
//     data.password= await bcrypt.hashSync(data.password,10);
//     //console.log(data.password);
//     //let mypass=data;
//     //console.log(mypass);
//      data.save();
//      res.send({
//        username:data.username,
//        fname : data.fname,
//        lname : data.lname,
//        email: data.email,
//        phone: data.phone,
//        date:data.date,
//        userId:data.userId,
//        gender:data.gneder,
//        password:data.password
//      });
 //    })
//});




// Get All User
userRoute.route('/').get((req, res) => {
  User.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});

//return specific user with given _id
userRoute.get('/:id',(req,res) =>{
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

  User.findById(req.params.id,(err,doc) => {
    if(!err) {res.send(doc);}
    else 
    {
      console.log('Error in retriving user: '+JSON.stringify(err,undefined,2));
    }
  });  


});


//Update User
userRoute.put('/:id',(req,res) => {
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send('No record with given id : ${req.params.id}');

  var user = {
      username:req.body.username,
      fname:req.body.fname,
      lname:req.body.lname,
      email:req.body.email,
      phone:req.body.phone,
      date:req.body.date,
      gender:req.body.gender, 
      password:req.body.password,
      file:req.body.file,
 };
User.findByIdAndUpdate(req.params.id,{$set: user},{new: true},(err,doc) => {
    if(!err) { res. send(doc);}
    else{console.log('Error in User update :'+JSON.stringify(err,undefined,2)); }
});

}); 

//delete User
userRoute.route('/:id').delete((req, res, next) => {
  User.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.status(200).json({
      msg: data
    })
  }
})
})

//login user    
userRoute.post(
  "/login",
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { username, password } = req.body;
    try {
      let user = await User.findOne({
      username
      

      });
     // console.log(user);
      if (!user)
        return res.status(400).json({
          message: "User Not Exist"
        });
       // console.log(user.password);
        //encrypt 
      const isMatch = await bcrypt.compareSync(password, user.password);
     // console.log(isMatch);
      //console.log(password);

      if (!isMatch){
        return res.status(400).json({
          message: "Incorrect Password !"
        })}

      const payload = {
        user: {
          id: user.id
        }
      };

     jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Server Error"
      });
    }
  }
);



module.exports = userRoute

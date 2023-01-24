"use strict";

const User = require("../../models/User.js");
const UserStorage = require("../../models/Userstorage.js")


const output = {
  home : (req,res)=>{
    res.render("home/index");
  },
  
  login : function(req,res){
    res.render('home/login');
  },
  register : (req,res)=>{
    res.render("home/register");
  }
}



const process = {
  login : (req,res)=>{
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
   
    
  }
}



module.exports = {
 output,
 process
}
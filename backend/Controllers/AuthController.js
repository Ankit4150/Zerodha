const User=require("../Models/userModel");
 const {createSecretToken}=require("../util/SecretToken");

 const bcrypt = require("bcryptjs");


module.exports.signUp=async(req,res,next)=>{
   try{
    const {email,username,password,createdAt}=req.body;
    const exituser=await  User.findOne({email});
    if(exituser){
        return res.json({massage:"user allready login"});
    }
     const user=await  User.create({email,username,password,createdAt});
     const token=createSecretToken(user._id);
     res.cookie("token",token,{
      httpOnly: true,
      secure: false,     // false on localhost
      sameSite: "lax",
      path: "/",
     });
     res.json({message:"user sign in successfully", success:true,user});
     next();
   }
   catch (error) {
    console.error(error);
  }
};




module.exports.logIn=async(req,res,next)=>{
    try{
    const {email,password}=req.body;
    if(!email||!password){
        return res.json({massege:"all field are required"});
    }
    const user= await User.findOne({email});
    if(!user){
        return res.json({message:"incorrect password or email"});
    }

    const auth=await bcrypt.compare(password,user.password);
    if(!auth){
        return res.json({message:"incorrect password or email "});
    }
    const token=createSecretToken(user._id);
    res.cookie("token", token, {
       httpOnly: true,
      secure: false,     // false on localhost
      sameSite: "lax",
      path: "/",
     });
       res.status(201).json({ message: "User logged in successfully", success: true });
     next()
     } catch (error) {
    console.error(error);
  }
 };
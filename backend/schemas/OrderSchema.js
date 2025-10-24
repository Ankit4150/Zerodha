const {Schema}=require("mongoose");

const OredrSchema=new Schema({
    name:String,
    qut:Number,
    price:Number,
    mode:String
});

module.exports={OredrSchema};
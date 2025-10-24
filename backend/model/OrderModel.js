const {model}=require("mongoose");

const {}=require("../schemas/OrderSchema");


const OrderModel=new model("oredr",OrderSchema);


module.exports={OrderModel};
 const bodyParser = require('body-parser');
const cors = require('cors');
const express=require("express");
require ("dotenv").config();
const mongoose=require("mongoose");
const PORT= process.env.PORT||3002;
const uri=process.env.MONGO_URL;
const {HoldingModel}=require("./model/HoldingModel");
const {PositionModel}=require("./model/PositionModel");
const authRoute=require("./Routes/AuthRoute")
const cookieParser = require("cookie-parser");


const app=express();

app.use(bodyParser.json());



app.get("/allholding",async(req ,res)=>{
      const allHolding=await HoldingModel.find({});
      res.json(allHolding);
});
app.get("/allposition",async(req ,res)=>{
      const allposition=await PositionModel.find({});
      res.json(allposition);
});



/////// server

app.use(cookieParser());
app.use(express.json());


app.use(cors({
   origin: ["https://zerodha-1-frontend-xgzy.onrender.com" ,"https://zerodha-1-dashboard.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use("/",authRoute);

app.use(cors());





mongoose.connect(uri)
  .then(() => {
    console.log("✅ CONNECTED TO MONGODB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });
import React from "react";
import Hero from "./Hero";
import Award from "./Award";
import Stats from "./Stats"
import Pricing from "./Pricing";
import Education from "./Eductaion";
import OpenAccount from "../OpenAccount";

 function Homepage() {
    return ( 
        <>
    
    <Hero/>
    <Award/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAccount/>
   
    </> 
    );
 }
 
 export default Homepage;
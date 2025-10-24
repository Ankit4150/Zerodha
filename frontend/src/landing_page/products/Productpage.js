import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe  from "./Universe";

function Product() {
    return ( 
        <>
        <Hero/>
        <LeftSection
        imgUrl="https://zerodha.com/static/images/products-kite.png"alt="kite"
         productname="Kite"
        productDiscription="Our ultra-fast flagship 
        trading platform with streaming market data, 
        advanced charts, an elegant UI,
         and more. Enjoy the Kite experience seamlessly 
         on your Android and iOS devices."
         tryDemo=""
         learnMore=""
         googlePlay=""
         appStore=""/>


          <RightSection imgUrl="https://zerodha.com/static/images/products-console.png"
          alt="product-console" 
          product="Console"
           productDescription="The central dashboard for your Zerodha account.
            Gain insights into your trades and investments 
            with in-depth reports and visualisations."
           learnMore=""
           />


          <LeftSection
        imgUrl="https://zerodha.com/static/images/products-coin.png"alt="product-coin"
         productname="Coin"
        productDiscription="Buy direct mutual funds online, commission-free, delivered directly
         to your Demat account. Enjoy the investment experience on your Android and iOS devices."
         tryDemo=""
         learnMore=""
         googlePlay=""
         appStore=""/>
        
             <RightSection imgUrl="https://zerodha.com/static/images/kite-trade/landing.svg"
          alt="kite-trade" 
          product="Kite Connect API"
           productDescription="Build powerful trading platforms and 
           experiences with our super simple HTTP/JSON APIs. If you are a startup, 
           build your investment app and showcase it to our clientbase."
           learnMore=""
           />




           <LeftSection
        imgUrl="https://zerodha.com/static/images/varsity-products.png"alt="varsity-product"
         productname="Varsity mobile"
        productDiscription="Our ultra-fast flagship 
        trading platform with streaming market data, 
        advanced charts, an elegant UI,
         and more. Enjoy the Kite experience seamlessly 
         on your Android and iOS devices."
         tryDemo=""
         learnMore=""
         googlePlay=""
         appStore=""/>

      <p style={{textAlign:"center", marginBottom:"100px", marginTop:"80px"}}>Want to know more about our technology stack? Check out the <a href='zerodha.tech' style={{textDecoration:"none"}}>Zerodha.tech</a > blog.</p>

        <Universe/>
        </>
     );
}

export default Product;
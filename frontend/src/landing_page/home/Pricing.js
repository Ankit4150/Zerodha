import React from "react";

 function Pricing() {
    return (  
       <div className="container">
        <div className="row">
            <div className="col-4 mt-4">
                <h1 className="mb-3">Unbeatable pricing</h1>
                 <a href="link" className="mx-5" style={{textDecoration:"none"}}>See pricing 
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="col-2"></div>
            <div className="col-6 mb-5">
                <div className="row text-center">
                    <div className="col-6 p-3 border">
                        <h1 className="mb-3">₹0</h1>
                        <p>free equity and <br/>direct mutual funds</p>
                    </div>
                    <div className="col-6 p-3 border">
                        <h1 className="mb-3">₹20</h1>
                        <p>intraday F&O</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
 }
 
 export default Pricing;
import React from "react";

function CreateTicket() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
                <div className="col-4 p-5 mt-5 mb-5">
                    <h4 className="text-muted"><i class="fa fa-plus-circle" aria-hidden="true"></i>Account opening </h4>
                  <ul style={{ listStyleType:"none",lineHeight:"2.3"}} className="mt-5">
                   <li > <a href="link" style={{ textDecoration:"none"}}>Online Account Opening</a></li>
                    <li><a href="link" style={{ textDecoration:"none"}}>Offline Account Opening </a></li> 
                    <li><a href="link" style={{ textDecoration:"none"}}> Company ,Partnership and HUF Account Opening</a></li>
                     <li><a href="link" style={{ textDecoration:"none"}}> NRI Account Opening</a></li>
                      <li><a href="link" style={{ textDecoration:"none"}}> Charges at Zerodha</a></li>
                       <li><a href="link" style={{ textDecoration:"none"}}> Zerodha IDFC FIRST Bank 3-in-1 Account </a></li>
                        <li><a href="link" style={{ textDecoration:"none"}}> Getting Started</a></li>
                     </ul> 
                </div>

                 <div className="col-4  p-5 mt-5 mb-5">
                 <h4 className="text-muted"> <i class="fa fa-user" aria-hidden="true"></i>Your Zerodha Account</h4>
                  <ul style={{ listStyleType:"none",lineHeight:"2.3"}}className="mt-5">
                   <li > <a href="link" style={{ textDecoration:"none"}}>Login Credentials</a></li>
                    <li><a href="link" style={{ textDecoration:"none"}}>Account Modification And Segment Addition </a></li> 
                    <li><a href="link" style={{ textDecoration:"none"}}> DP ID And Bank Details</a></li>
                     <li><a href="link" style={{ textDecoration:"none"}}> NRI Account Opening</a></li>
                      <li><a href="link" style={{ textDecoration:"none"}}> Transferm And Conversion of Shares</a></li>
                     </ul>
                 </div>


                  <div className="col-4  p-5 mt-5 mb-5">
                    <h4 className="text-muted"> <i class="fa fa-bar-chart" aria-hidden="true"></i>Your Zerodha Account </h4>
                    
                     <ul style={{ listStyleType:"none",lineHeight:"2.3"}}className="mt-5 ">
                   <li > <a href="link" style={{ textDecoration:"none"}}>Margin/Leverage, Product and Order types</a></li>
                    <li><a href="link" style={{ textDecoration:"none"}}>Kite Web and Mobile </a></li> 
                    <li><a href="link" style={{ textDecoration:"none"}}> Tradings FAQs</a></li>
                     <li><a href="link" style={{ textDecoration:"none"}}> Corporate Action</a></li>
                      <li><a href="link" style={{ textDecoration:"none"}}> Sentinel</a></li>
                       <li><a href="link" style={{ textDecoration:"none"}}> Kite API</a></li>
                        <li><a href="link" style={{ textDecoration:"none"}}>Pi and other Plateform</a></li>
                         <li><a href="link" style={{ textDecoration:"none"}}> Stockreports+</a></li>
                          <li><a href="link" style={{ textDecoration:"none"}}> GTT</a></li>
                     </ul>
                  </div>
            </div>
        </div>
     );
}

export default CreateTicket;
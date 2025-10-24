import React from "react";

function Award() {
    return ( 
       <div className="container mt-5">
        <div className="row">
            <div className="col-6 p-5">
                <img src="https://sashares.co.za/wp-content/uploads/2022/12/ZERODHA-10.png" alt=""></img>
            </div>
            <div className="col-6 p-5 mt-3">
                 <h1>Largest broker in india </h1>
                 <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                 <div className="row">
                    <div className="col-6">
                        <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                        </ul>
                         <ul>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                        </ul>
                         <ul>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                        </ul>
                    </div>
                     <div className="col-6">
                        <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                        </ul>
                         <ul>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                              </ul>
                               <ul>
                            <li>
                                <p>Bonds and Govt. Securities</p>
                            </li>
                              </ul>
                     </div>
                 </div>
                 <div><img src="https://images.squarespace-cdn.com/content/v1/5eb3de0c421ba53e177fa656/1589290224821-KCAYRJHS5XR7VVWYLEKA/The+Sunday+Times,+Forbes,+ITALIA!,+Financial+Times,+The+Telegraph"style={{width:"70%"}}></img></div>
            </div>
            
        </div>
       </div>
     );
}

export default  Award;
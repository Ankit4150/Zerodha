import React from "react";

function  Team() {
    return (  
        <div className="container">
            <div className="row border-top p-5 mb-5 text-center"> 
                <h1>People</h1>
                </div>
                <div className="row p-9">
                    <div className="col-6 text-center">
                        <img src="https://zerodha.com/static/images/nithin-kamath.jpg"  alt="founder/ceo" style={{borderRadius:"100%",width:"50%"}}></img>
                        <h2>Nithin Kamath</h2>
                        <h6 className="text-muted">Founder, CEO</h6>
                    </div>
                     <div className="col-6 fs-6 ">
                       <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles 
                        he faced during his decade long stint as a trader.
                         Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                         <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
                             and the Market Data Advisory Committee (MDAC).</p>
                             <p>Playing basketball is his zen.</p>
                             <p>Connect on <a href="/">Homepage</a> /<a href="tarnding"> TradingQnA</a> /<a href="twitter"> Twitter</a></p>
                     </div>
                </div>
        </div>
    );
}

export default  Team;
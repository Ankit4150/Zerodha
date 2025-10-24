import React from "react";

function Hero() {
    return ( 
       <section className="container-fluid"id="supporthero">
        <div className=" p-5" id="supportwrapper">
            <h4>Support Portal</h4>
            <a href="track ticket" style={{textDecoration:"none"}}>Track ticket</a>
        </div>
        <div className="row p-5 m-3 ">
        <div className="col-6 p-5">
            <h1 className="fs-3">Search for answer or browse help topics to create a ticket</h1>
            <input placeholder="Eg:how do i activated F&O,why is my order is getting rejected.."/>
            <br/>
            <a href="t">Track Account Opening</a>
            &nbsp;&nbsp;&nbsp;
            <a href="t"> Track segment activation</a>
             &nbsp;&nbsp;&nbsp;
            <a href="i">Intraday Margins</a>
            <a href="k">Kite user manual</a>

        </div>
        <div className="col-6 p-5">
            <h1 className="fs-3">Feature</h1>
            <ol style={{lineHeight:"3"}}>
                <li> <a href="c"> Current Takeover and Delisting - January 2024</a></li>
                <li> <a href="l">latest infraday laverages-MIS & CO </a></li>
            </ol>
           
           
        </div>
        </div>
       </section>
     );
}

export default Hero;
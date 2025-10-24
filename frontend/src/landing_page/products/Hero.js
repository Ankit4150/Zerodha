import React from "react";

function Hero() {
    return ( 
        <div className="container border-bottom mt-5 mb-3">
            <div className="text-center mt-5 p-5 ">
                <div className="row">
                <h1 className="mb-3">Zerodha Products</h1>
                <h3 className="text-muted fs-4 mb-4">Sleek, modern, and intuitive trading platforms</h3>
                <p className="mt-2 mb-5">Check out our <a href="offering" style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                </div>
            </div>
        </div>
     );
}

export default Hero;
 import React from "react";

    function NotFound() {
        return ( 
            <div className="container p-5">
        <div className="row text-center">
          <h1 className="mt-5"> 404  not found</h1>
          <p>We couldn’t find the page you were looking for.<a href="/" style={{textDecoration:"none"}}>Zerodha’s home page</a></p>
        </div>
       </div>
         );
    }
    
    export default NotFound;
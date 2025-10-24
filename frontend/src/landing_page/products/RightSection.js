import React from "react";

function RightSection({imgUrl,alt,product,productDescription,learnMore}) {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5">
                
                <div className="col-6 mt-5" style={{marginTop:"200px"}}>
                    <h1 className="mb-5 mt-5">{product}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>learn More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                   
                </div>
                 <div className="col-6 ">
                    <img src={imgUrl}alt={alt}></img>
                 </div>
            </div>
        </div>
        
     );
}

export default RightSection;
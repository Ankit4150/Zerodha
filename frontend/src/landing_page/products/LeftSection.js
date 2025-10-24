import React from "react";

function LeftSection({imgUrl,alt,productname,productDiscription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imgUrl}alt={alt}></img>
                    </div> 
                <div className="col-6 p-5 mt-4">
                    <h1 className="mb-5">{productname}</h1>
                    <p>{productDiscription}</p>
                    <div >
                   <a href={tryDemo} style={{textDecoration:"none"}}>try Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>leran More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="mt-3">
                      <a href={googlePlay}><img src="https://zerodha.com/static/images/google-play-badge.svg"alt="googleplay"></img></a>
                     <a href={appStore} style={{marginLeft:"50px"}}><img src="https://zerodha.com/static/images/appstore-badge.svg" alt="appstore"></img></a>
                    </div>
                   
                </div>

                </div>
        </div>
     );
}

export default LeftSection;
import React  from "react";

function  Universe() {
    return ( 
        <div className="container">
            <div className="row text-center mt-5">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-5">
                   <img src="https://zerodha.com/static/images/partners/zerodhafundhouse.png" alt='zerodha.com' style={{width:"210px", height:"55px"}}/>
                   <p className="text-small text-muted mt-3">Our assest management venture that is creating simple and tranparent index funds to help you save for your goal</p>
                </div>
                 <div className="col-4 p-3 mt-5">
                    <img src="https://zerodha.com/static/images/products/sensibull-logo.svg" alt="products"style={{width:"210px", height:"55px"}}/>
                    <p className="text-small text-muted mt-3">Options trading  plateform for lets you stratgies analyze position, ans exmine data point like open interest, FII/DII  and more</p>
                 </div>
                  <div className="col-4 p-3 mt-5">
                    <img src="https://zerodha.com/static/images/partners/tijori.svg" alt="parteners"style={{width:"210px", height:"55px"}}/>
                    <p className="text-small text-muted mt-3">Investment research plateform that offer details insights on stocks, sectors, supply, chains and more</p>
                  </div>


                <div className="col-4 p-3 mt-5"> 
                    <img src="https://zerodha.com/static/images/products/streak-logo.png" alt="systematic " style={{width:"210px", height:"55px"}}/>
                    <p  className="text-small text-muted mt-3"> Systematic  trading playeform that allow you to create and backtest strategies without coding</p>
                </div>
                 <div className="col-4 p-3 mt-5"> 
                    <img src="https://zerodha.com/static/images/products/smallcase-logo.png" alt="products"style={{width:"210px", height:"55px"}}/>
                    <p className="text-small text-muted mt-3"> Thametic investing plateform that help you invest in diversified baskets of stock on ETFs</p>
                </div>
                 <div className="col-4 p-3 mt-5"> 
                    <img src="https://zerodha.com/static/images/products/ditto-logo.png" alt="ditto"style={{width:"210px", height:"55px"}}/>
                    <p className="text-small text-muted mt-3">Personilized advice on life and health insurance. No spam and non-misselling</p>
                </div>
                     <button  className="p-2 btn btn-primary"style={{width:"20%",margin:"auto"}}>sign up for free</button>
            </div>
        </div>
    );
}

export default  Universe;
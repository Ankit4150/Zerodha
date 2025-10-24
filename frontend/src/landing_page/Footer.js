import React from "react";

function  Footer() {
    return ( 
        <footer style={{background:"rgb(250 250 250)"}}>
      <div className="container border-top mt-5" >
        <div className="row mt-5">
            <div className="col">
                <img src="https://zerodha.com/static/images/logo.svg"style={{width:"50%"}}></img>
                <p>&copy; 2010 - 2025, Zerodha Broking Ltd.All rights reserved.</p>
            </div>
            <div className="col "> 
                <p>Company</p>
                <ul className="ul-style">
                    <li> <a href=""className="ft-a" >About</a></li>
                    <li>  <a href=""  className="ft-a">Philosophy</a></li>
                    <li> <a href="" className="ft-a" >Press & media</a><br/></li>
                    <li>  <a href="" className="ft-a" >Careers</a><br/></li>
                    <li> <a href="" className="ft-a" >Zerodha Cares (CSR)</a><br/></li>
                    <li> <a href="" className="ft-a">Zerodha.tech</a><br/></li>
                    <li> <a href="" className="ft-a">Open source</a><br/></li>
                </ul>
        
            </div>
            <div className="col  ">
                <p>Support</p>
        
                   <ul  className="ul-style">
                    <li><a href="" className="ft-a">Contact us</a><br/></li>
                      <li> <a href="" className="ft-a">Support portal</a><br/></li>
                        <li><a href="" className="ft-a">How to file a complaint?</a><br/></li>
                          <li> <a href="" className="ft-a">Status of your complaints</a><br/></li>
                            <li><a href="" className="ft-a">Bulletin</a><br/></li>
                              <li> <a href="" className="ft-a">Circular</a><br/></li>
                              <li>  <a href="" className="ft-a">Z-Connect blog</a><br/></li>
                              <li> <a href="" className="ft-a">Downloads</a></li>
                   </ul>
                  
            </div>
            <div className="col ">
                <p>Account</p>
                <ul className="ul-style ">
                    <li> <a href="" className="ft-a">Open demat account</a><br/></li>
                    <li>  <a href="" className="ft-a">Minor demat account</a><br/></li>
                    <li><a href="" className="ft-a">NRI demat account</a><br/></li>
                    <li>  <a href="" className="ft-a">Commodity</a><br/></li>
                    <li><a href="" className="ft-a">Dematerialisation</a><br/></li>
                    <li> <a href="" className="ft-a">Fund transfer</a><br/></li>
                    <li> <a href="" className="ft-a"> MTF</a><br/></li> 
                    <li>   <a href="" className="ft-a">Referral program</a><br/></li>            
                       </ul>
             
            </div>
        </div>
        <div className="mt-5 text-muted " style={{fontSize:"13px"}}>
        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.:
             INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – 
             SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities 
            Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha
             Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
             J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to <a style={{color:"##0d62adff"}}>complaints@zerodha.com</a>, for DP related
               to<a style={{color:"##0d62adff"}}> dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

               <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for
                 filing complaints on SCORES: Name, PAN, Address,
                 Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>


                 <p><a style={{color:"##0d62adff"}}>Smart Online Dispute Resolution </a>|<a style={{color:"#0d62adff"}}>Grievances Redressal Mechanism</a> </p>

                 <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                 <p>Attention investors: 1) Stock brokers can accept securities as margins from clients 
                    only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your 
                    e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository
                     on your e-mail and/or mobile number to create pledge. 3) 
                    Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p>India's largest broker based on networth as per NSE. <a  style={{color:"#0d62adff"}}>NSE broker factsheet</a></p>

                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email
                         IDs with your stock brokers. Receive information of your transactions directly from 
                         Exchange on your mobile/email at the end of the day. Issued in the interest of investors. 
                         KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI
                          registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again 
                          when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no 
                          need to issue a cheque. Please write the Bank account number and sign the IPO application 
                          form to authorize your bank to make payment in case of allotment. In case of non allotment the 
                          funds will remain in your bank account. As a business we don't give stock tips, and have not
                           authorized anyone to trade on behalf of others. If you find anyone 
                        claiming to be part of Zerodha and offering such services, please <a style={{color:"#0d62adff"}}>create a ticket here</a>.</p>
                        </div>
                         <div className="footer-link text-muted" style={{display:"flex", gap:"23px" ,textAlign:"center",justifyContent:"center"}}>
                           <p>NSE </p>
                           <p>BSE </p>
                           <p>MCX </p>
                           <p> Terms & conditions </p>
                         <p> Policies & procedures</p>    <p>Privacy policy </p>
                         <p>Disclosure </p>
                         <p>For investor's attention </p>
                         <p>Investor charter</p>
                      

                        
                        </div>
                       
      </div>
      </footer>
      
     );
}

export default  Footer;
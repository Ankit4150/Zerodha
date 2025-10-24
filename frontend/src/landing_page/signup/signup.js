import React, { useState } from "react";
import Signuppage from "../pages/signuppage"
import Loginpage from "../pages/loginpage";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = (type) => {
    if (type === "signup") {
      setIsLogin(true);
    } else if (type === "login") {
      navigate("/dashboard");
    }
  };



    return (
        <div className="container mt-5 text-center ">
          <div className="row mt-5  mb-5 p-5">
            <h2 >Open a free demat and trading account online</h2>
            <h5 className="text-muted">Start investing brokerage free and join a community of 1.6+ crore investors and traders</h5>
          </div>

          <div className="row p-5">
           <div className="col-6 ">
            <img src="https://zerodha.com/static/images/account_open.svg" alt="img"></img>
           </div>
           <div className="col-6 " >
            
      

           {isLogin ? (
  <Loginpage
    onSuccess={() => handleSuccess("login")}
    onToggle={() => setIsLogin(false)} // switch to signup
  />
) : (
  <Signuppage
    onSuccess={() => handleSuccess("signup")}
    onToggle={() => setIsLogin(true)} // switch to login
  />
)}
           

             </div>
          </div>
        </div>
      );
}

export default Signup;
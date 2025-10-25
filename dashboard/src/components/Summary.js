import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Summary = () => {
 
   const navigate = useNavigate();
  const [username, setUsername] = useState("");

  // Fetch username from backend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("https://zerodha-1-backend-3qg2.onrender.com", {
          withCredentials: true,
        });

        if (data.status) {
          setUsername(data.user);
        } else {
          navigate("/login"); // if not logged in, go back to login
        }
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);


  return (
    <>
      <div className="username">
        <h6>Hi, {username || "User"}!</h6>
        
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;

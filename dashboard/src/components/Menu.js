


 
import { Link, useNavigate } from "react-router-dom";  // ✅ useNavigate imported
import { useCookies } from "react-cookie";             // ✅ useCookies imported
import axios from "axios";
import React, { useEffect, useState } from "react";




const Menu =()=>{

   
  const [selectedMenu,setSelectedMenu]=useState(0);
  const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);


   const navigate = useNavigate();  // ✅ FIXED
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleMenuClick=(index)=>{
    setSelectedMenu(index);
  };

  const handleProfileClick=(index)=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };



  const [username, setUsername] = useState("");
    useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("https://zerodha-1-backend-3qg2.onrender.com/me", {
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

  // Logout handler
  const handleLogout = async () => {
  try {
    const res = await axios.post("https://zerodha-1-backend-3qg2.onrender.com/logout", {}, { withCredentials: true });
    console.log("Logout response:", res.data);

    if (res.data.status === true) {
      setUsername("");
     window.location.replace(  "http://localhost:3000/signup", { replace: true });
    }
  } catch (err) {
    console.log("Logout failed:", err);
 //  window.location.href = " http://localhost:3000";

  }
};






 const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
     <div className="menu-container">
      <img  src="logo.png" style={{width:"50px"}} alt="logo"/>
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}>
             <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Deshboard</p>
            </Link>
           
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/Orders" onClick={()=>handleMenuClick(1)}>
             <p className={selectedMenu===1? activeMenuClass:menuClass}>Orders</p>
            </Link>
           
          </li>
          <li>
           <Link style={{textDecoration:"none"}} to="/Holdings" onClick={()=>handleMenuClick(2)}>
             <p className={selectedMenu===2? activeMenuClass:menuClass}>Holdings</p>
            </Link>
           
            </li>
           <li>
           <Link style={{textDecoration:"none"}} to="/Positions" onClick={()=>handleMenuClick(3)}>
             <p className={selectedMenu===3? activeMenuClass:menuClass}>Positions</p>
            </Link>
           
            </li>
            <li>
            <Link style={{textDecoration:"none"}} to="/Funds" onClick={()=>handleMenuClick(4)}>
             <p className={selectedMenu===4? activeMenuClass:menuClass}>Funds</p>
            </Link>
           
              </li>
             <li>
              <Link style={{textDecoration:"none"}} to="/Apps" onClick={()=>handleMenuClick(5)}>
             <p className={selectedMenu===5? activeMenuClass:menuClass}>Apps</p>
            </Link>
           
              </li>
        </ul>
        <hr/>
        {/* <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div> */}

         <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{username ? username[0].toUpperCase() : "U"}</div>
          <p className="username">{username || "User"}</p>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <p>{username}</p>
              <p style={{ cursor: "pointer" }}>Need help?</p>
              <p style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</p>
            </div>
          )}
        </div>
      </div>
     </div>
  );
}

export default Menu;
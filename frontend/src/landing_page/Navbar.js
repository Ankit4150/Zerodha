import React from "react";


function Navbar() {
  return (
   
      <nav class="navbar navbar-expand-lg  border-bottom">
        <div class="container">
          <a class="navbar-brand"  href="/">
            <img src="https://zerodha.com/static/images/logo.svg" alt="Zerodha Log0"style={{width:"25%"}}></img>
          </a >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
            <form class="d-flex" role="search">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"  href="/signup">
                 signup
                </a >
              </li>
              <li class="nav-item active">
                <a  class="nav-link  active"  href="/about">
                 about
                </a >
              </li>
               <li class="nav-item">
                <a class="nav-link active" aria-current="page"  href="/product">
                 products
                </a >
              </li>
              <li class="nav-item active">
                <a class="nav-link  active" href="/pricing">
                 pricing
                </a >
              </li>
               <li class="nav-item active">
                <a class="nav-link  active" href="/support">
                 Support
                </a>
              </li>
            </ul>
            </form>
          </div>
        </div>
      </nav>
   
  );
}

export default Navbar;

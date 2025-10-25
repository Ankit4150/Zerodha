import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './landing_page/home/Homepage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup  from './landing_page/signup/signup';
 import Product from './landing_page/products/Productpage';
import Pricing from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage'
import About from './landing_page/about/Aboutpage'
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from  './landing_page/Notfound';

import Signuppage from './landing_page/signup/signup';
import Loginpage from './landing_page/pages/loginpage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Homepage/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/product" element={<Product/>}></Route>
  <Route path="/support" element={<Support/>}></Route>
  <Route path="/pricing" element={<Pricing/>}></Route>
  <Route  path="/login" element={<Loginpage/>}></Route>
  <Route  path="/Signuppage" element={<Signuppage/>}></Route>
  
  <Route path='*'element={<NotFound/>}></Route>
 </Routes>
  <Footer/>
 </BrowserRouter>
);


import React  from "react";
import {render,screen} from "@testing-library/react";
 import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero components",()=>{
  test ("renders hero image",()=>{
     render(<Hero/>);
     const heroimage=screen.getByAltText("Hero.img");
     expect(heroimage).toBeInTheDocument();
     expect(heroimage).toHaveAttribute("src","https://zerodha.com/static/images/landing.png");
  });

  test(" renders signup button",()=>{
    render(<Hero/>);
    const signupbutton=screen.getByRole("button",{name:"sign up for free"});
    expect(signupbutton).toBeInTheDocument();
    expect(signupbutton).toHaveClass("btn-primary");
});
})

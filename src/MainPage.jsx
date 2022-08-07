import React from "react";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Home from "./Home";
import homeimg from './images/imgmine2.gif';
import Journey from "./Journey";
import Skills from "./Skills";

const MainPage = () => {

    return(
        <>
          <Home content="Welcome to my Portfolio" btncontent="About Me" image={homeimg} link="/aboutme"></Home>
          <Journey/>
          <Skills/>
          <Aboutme/>
          <Contact/>
        </>
    );

};

export default MainPage;
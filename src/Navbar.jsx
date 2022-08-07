import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import logo from '../src/images/vibes2.gif';

const Navbar = () => {

    return(
        <>
          
          <div className="container-fluid nav_bg">

            <div className="row">

              <div className="col-10 mx-auto">


          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink  exact className="navbar-brand" to="#"><img src={logo} alt="Image Not found" style={{width:"25vh" ,height:"15vh"}}/></NavLink>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-2">
                <li className="nav-item active">
                  <NavLink exact className="nav-link" activeClassName="menu_active" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="menu_active" to="/journey">Journey</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="menu_active" to="/skills">Skills</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="menu_active" to="/aboutme">About Me</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="menu_active" to="/contact">Contact Me</NavLink>
                </li>
                
              </ul>
              
            </div>
          </nav>
          
          </div>

</div>

</div>

        </>
    );

};

export default Navbar;
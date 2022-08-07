import React from "react";
import './Home.css';
import { NavLink } from "react-router-dom";


const Home = (props) => {

    return (
        <>


          <section id="headermain"  className="d-flex justify-content-center align-items-center">
              
              <div className="container-fluid">
                 <div className="row">
                   <div  className="col-10 mx-auto">
                      <h1 className="text-center hedingModifi mt-sm-25 mt-md-25 mt-lg-25">{props.content}</h1>
                      <div className="my-5"></div>
                    <div className="row">
                      <div id="header"  className="col-md-6 pt-1 pt-lg-0 mt-sm-5 mt-md-3  order-sm-2 order-md-2 order-lg-1">
                          <h1> Hello, My name is <br/> <strong className="col_name"> Natha Tarkhala </strong></h1>
                          <h3 className="my-1">I am Fullstack Devloper.</h3>
                          
                        <div className="mt-4">
                           <NavLink to={props.link} className="btn_color px-3">{props.btncontent}</NavLink>
                        </div>

                      </div>

                      <div id="header" className="col-md-6 mt-5 pt-1 pt-lg-0 order-md-1 order-sm-1 order-lg-2 mt-4 home_image">
                         <img src={props.image} className="img-fluid homeimganime" alt="bg not found"/>
                      </div>

                   </div>
                   </div>
                 </div>

              </div>

          </section>
        </>
      );

};

export default Home;
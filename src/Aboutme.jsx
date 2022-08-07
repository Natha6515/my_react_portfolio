import React from "react";
import Home from "./Home";
import './Home.css';
import aboutus from './images/aboutus.jpg';
import abm from './images/abm.gif'
import { Hobbies, Intrests } from "./JourneeyCardData";
import './Skills.css'
import Card from "./Card";
import gd1 from './images/gd1.jpg';
import gd2 from './images/gd2.jpg';


const Aboutme = () => {

  const Projects = [
    {
        imagesrc : {gd1},
        title : "Student Database Manager"
    },
    {
        imagesrc : {gd2},
        title : "Event Handler"
    }
];


    return(
        <>
          <Home content="Wanna Know About Me ?" btncontent="Home Page" image={aboutus} link="/"></Home>

          <div className="container-fluid">
             
             <div className="row">
                 
                 <div className="col-10 mx-auto">
                   
                   <div className="my-5"></div>
                   <div className="my-3"></div>
                   <div className="my-3"></div>
                   <div className="my-3"></div>
                   <div className="my-3"></div>

                   <h1 className="text-center title_hover hedingModifi bg-info my-5"> Who i am ? </h1>

                   <div className="row">
                      <div className="col-md-6 pt-1 pt-lg-0 mt-sm-3 mt-md-3 order-2 order-md-2 order-lg-1 order-sm-2">

                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<q className="fletter my-5 mb-lg-5">My name is Natha Tarkhala. I am a computer engineering student pursuing my bachelor's degree at L.D. Engineering College while I am based in Kutiyana, Porbandar. I have been learning core skills in computer science over the past 3 years. I work on front-end, back-end, and database technologies. I am working on trending technologies like ReactJS, Spring MVC , Spring Boot , MongoDB, etc.</q></p>
                         
                         <p className="mt-4"> <strong> Birth Date :  </strong> 25 <sup>th</sup> March 2002 </p>
                         <p> <strong> Native Place : </strong> Kutiyana, Porbandar</p>
                         <p> <strong> Current Address : </strong> Ahmedabad </p>

                      </div>
                   <div className="my-3"></div>
                   <div className="my-3"></div>

                      <div className="col-md-6 mt-5 pt-1 pt-lg-0 order-md-1 order-1 order-lg-2 order-sm-1 home_image mb-5">
  
                       
                           <img src={abm} className="img-fluid homeimganime" alt="bg not found"/>
                        

                      </div>
                  
                   </div>

                   <div className="row my-5">
                   <h2 className="text-center my-5 title_hover hedingModifi"> Hobbies </h2>
                      

                      {Hobbies.map((data,index) =>  {
                        
                        return(
                          <>
                            <Card key={index} title={data.title} u_image={data.imagesrc}/>
                            
                          </>
                        );
                    })}
                  
                   </div>

                   <div className="row my-5">
                   <h2 className="text-center my-5 title_hover hedingModifi"> Intrest </h2>
                      

                      {Intrests.map((data,index) =>  {
                        
                        return(
                          <>
                            <Card key={index} title={data.title} u_image={data.imagesrc}/>
                            
                          </>
                        );
                    })}
                  
                   </div>

                   <div className="row my-5">
                   <h2 className="text-center my-5 title_hover hedingModifi"> Projects </h2>
                      <Card title="Student Data Management System" u_image={gd1}/>
                      <Card title="Event Handler" u_image={gd2}/>
                   </div>

                 
                 </div>

             </div>

          </div>

        </>
    );

};

export default Aboutme;


                    
                    
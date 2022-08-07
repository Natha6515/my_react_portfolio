import React from "react";
import Card from "./Card";
import Data, { Backend, DB, OtherSkills } from "./SkillData";
import './Skills.css';

const Skills = () => {

    return (
        <>

          <div className="my-5">
             <h2 className="text-center hedingModifi"> My Skills</h2>
          </div>

          <div className="container-fluid">
              <div className="row">
                  <div className="col-10 mx-auto">
                  <div className="row gy-4">
                     
                    <h2 className="text-center my-5 title_hover hedingModifi"> Frontend Skills </h2>

                    {Data.map((data,index) =>  {
                        
                        return(
                          <>
                            <Card key={index} title={data.title} u_image={data.images}/>
                            
                          </>
                        );
                    })}

                    <h2 className="text-center my-5 title_hover hedingModifi"> Database Skills </h2>
                    
                    {DB.map((data,index) =>  {
                        
                        return(
                          <>
                            <Card key={index} title={data.title} u_image={data.images}/>
                            
                          </>
                        );
                    })}

                     <h2 className="text-center my-5 title_hover hedingModifi"> Backend Skills </h2>

                    {Backend.map((data,index) =>  {
                        
                        return(
                          <>
                            <Card key={index} title={data.title} u_image={data.images}/>
                            
                          </>
                        );
                    })}

                    <h2 className="text-center my-5 title_hover hedingModifi"> Other Skills </h2>
                    
                    {OtherSkills.map((data,index) =>  {
                        
                        return(
                          <>
                            <Card key={index} title={data.title} u_image={data.images}/>
                            
                          </>
                        );
                    })}

                   <div className="my-5"></div>
                    
                     
                  </div>
                  </div>
              </div>
          </div>
          

 
        </>
      );

};

export default Skills;
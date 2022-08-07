import React from "react";
import './Home.css';
import JourneyCardData from "./JourneeyCardData";
import JourneyCard from "./JourneyCard";

const Journey = () => {

    return (
        <>
         <div className="my-5">
             <h2 className="text-center hedingModifi"> My Journey </h2>
          </div>

          <div className="container-fluid">
              <div className="row">
                  <div className="col-10 mx-auto">
                  <div className="row gy-4">
                     
                    <h2 className="text-center my-5 title_hover hedingModifi"> Institutional Journey </h2>

                    {JourneyCardData.map((val,index) => {
                        return(
                          <>
                            <JourneyCard 
                            key={index}
                            imgsrc={val.imagesrc} 
                            title={val.title}
                            content={val.content}
                            iname={val.iname}
                            orderside={val.orderside}    
                            orderside1={val.orderside1}        
                            />
                          </>
                        );
                    })}
                    
                  </div>
                  </div>
              </div>
          </div>
          
        </>
      );

};

export default Journey;
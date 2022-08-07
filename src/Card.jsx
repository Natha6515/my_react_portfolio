import React from "react";
import './Card.css'

const Card = (props) => {
    return(
        <>
          
                      <div className="col-md-6 col-sm-12 col-lg-4 mx-auto mb-5 d-flex justify-content-center">
                        <div className="card main_card" style={{width:"40vh"}}>
                          <img src={props.u_image} className="card-img-top imgsize" alt="Image Not found"/>
                          <div className="card-body">
                            <h5 className="card-title text-center">{props.title}</h5>
                          </div>
                        </div>
                      </div>
                    
        </>
    );
};

export default Card;
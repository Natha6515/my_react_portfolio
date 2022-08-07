import React from "react";
import './Home.css';

const  JourneyCard = (props) => {

    return(
        <>
          <div className="container-fluid">
           <div className="col-md-12 col-sm-12 col-lg-10 mx-auto mb-5 d-flex justify-content-center">
              <div className="card-group vgr-cards">
                <div className="card">
                
                <div className="row">
                <div className="col-xl-5 col-sm-6 col-md-6 order-lg-2 order-md-1 ml-auto ml-md-auto">
                  <div className="card-img-body">
                      <img className="card-img" src={props.imgsrc} alt={props.imgsrc}/>
                  </div>
                </div>
                <div className="col-xl-7 col-sm-6 col- col-md-6 order-lg-1 order-md-1 mr-auto mr-md-auto">
                  <div className="card-body d-flex justify-content-center align-items-center flex-column">
                    <h4 className="card-title mt-3">{props.title}</h4>
                    <h6 className="card-text my-3">{props.iname}</h6>
                    <p className="card-text my-3">{props.content}</p>
                  </div>
                  </div>
                </div>
                
                </div>
              </div>
            </div>
            </div>
        </>
    );

};

export default JourneyCard;
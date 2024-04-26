import React from 'react';
import './style.css'; // Make sure to import your CSS file
import image from "./about.jpeg"

function National() {
  return (
    <div>
      <div className="heading-container">
        <h1 className="text-center"><b>INTERNATIONAL LEVEL ACHIEVEMENTS</b></h1>
      </div>
      <div className="maincontainer">
        <div className="card-container">
          <div className="thecard">
            <div className="thefront">
              <img className="img-responsive" src={image} alt="silambam" />
              <div className="name"><b>Dhrona</b></div> {/* Add the name here */}
            </div>
            <div className="theback">
              <h1>Dhrona</h1>
              <h6>is subject to the terms and conditions governing this and all transactions.</h6>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="thecard">
            <div className="thefront">
              <img className="img-responsive" src={image} alt="silambam" />
              <div className="name"><b>Dhrona</b></div> {/* Add the name here */}
            </div>
            <div className="theback">
              <h1>Dhrona</h1>
              <h6>is subject to the terms and conditions governing this and all transactions.</h6>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="thecard">
            <div className="thefront">
              <img className="img-responsive" src={image} alt="silambam" />
              <div className="name"><b>Dhrona</b></div> {/* Add the name here */}
            </div>
            <div className="theback">
              <h1>Dhrona</h1>
              <h6>is subject to the terms and conditions governing this and all transactions.</h6>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="thecard">
            <div className="thefront">
              <img className="img-responsive" src={image} alt="silambam" />
              <div className="name"><b>Dhrona</b></div> {/* Add the name here */}
            </div>
            <div className="theback">
              <h1>Dhrona</h1>
              <h6>is subject to the terms and conditions governing this and all transactions.</h6>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="thecard">
            <div className="thefront">
              <img className="img-responsive" src={image} alt="silambam" />
              <div className="name"><b>Dhrona</b></div> {/* Add the name here */}
            </div>
            <div className="theback">
              <h1>Dhrona</h1>
              <h6>is subject to the terms and conditions governing this and all transactions.</h6>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="thecard">
            <div className="thefront">
              <img className="img-responsive" src={image} alt="silambam" />
              <div className="name"><b>Dhrona</b></div> {/* Add the name here */}
            </div>
            <div className="theback">
              <h1>Dhrona</h1>
              <h6>is subject to the terms and conditions governing this and all transactions.</h6>
            </div>
          </div>
        </div>
        {/* Repeat other card-container blocks similarly */}
      </div>
    </div>
  );
}

export default National;

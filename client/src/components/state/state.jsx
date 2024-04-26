import React from 'react';
import './style.css'; // Make sure to import your CSS file

import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"

function State() {
  return (
    <div>
      <div className="heading-container">
        <h1 className="text-center"><b>STATE LEVEL ACHIEVEMENTS</b></h1>
      </div>
      <div className="maincontainer">
        <div className="card-container">
          <div className="thecard">
            <div className="thefront">
              <img className="img-responsive" src={img1} alt="silambam" />
              <div className="name"><b>Muniyappan</b></div> {/* Add the name here */}
            </div>
            <div className="theback">
              <h1>CEG</h1>
              <h3>State Third-2022</h3>
              <h5>Dept:Computer Science</h5>
              <h6>Batch:2017-2021</h6>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="thecard">
            <div className="thefront">
              <img className="img-responsive" src={img2} alt="silambam" />
              <div className="name"><b>Kaveeswari R</b></div> {/* Add the name here */}
            </div>
            <div className="theback">
            <h1>ACT</h1>
              <h3>State Third-2021</h3>
              <h5>Dept:Textile</h5>
              <h6>Batch:2017-2021</h6>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="thecard">
            <div className="thefront">
              <img className="img-responsive" src={img3} alt="silambam" />
              <div className="name"><b>Shanmathi Sri P</b></div> {/* Add the name here */}
            </div>
            <div className="theback">
            <h1>ACT</h1>
              <h3>State Third-2021</h3>
              <h5>Dept:Chemical</h5>
              <h6>Batch:2017-2021</h6>
            </div>
          </div>
        </div>
        
        {/* Repeat other card-container blocks similarly */}
      </div>
    </div>
  );
}

export default State;

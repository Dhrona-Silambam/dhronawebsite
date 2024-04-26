import React from 'react';
import './style.css'; // Make sure to import your CSS file
import image from "./team-1.jpg"

function International() {
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
              <div className="name"><b>Kowshik Palanisamy</b></div> {/* Add the name here */}
            </div>
            <div className="theback">
              <h2>CEG</h2>
              <h3>International Champion</h3>
              <h5>Dept:Mining</h5>
              <h5>Batch:2015-2019</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default International;

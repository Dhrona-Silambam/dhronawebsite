import React from 'react';

import {useEffect,useState} from 'react' // Import the national achievements data
// Import your image file
import './style.css';


const International = () => {

  const [images, setImages] = useState(null);
  
  useEffect(() => {
    // Fetch all image data from the backend when the component mounts
    fetchImages();
  }, []); // Empty dependency array ensures that the effect runs only once

  const fetchImages = async () => {
    const body = { type: 'international' }; // Send type as an object
    try {
      const response = await fetch(`http://localhost:5000/images`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (


   
 <>
      <div className="heading-container">
        <h1 className="text-center"><b>INTERNATIONAL LEVEL ACHIEVEMENTS</b></h1>
      </div>
<div className="maincontainer">

{images ? (
  images.length > 0 ? (
    images.map((image, index) => (
     
          <div key={index} className="card-container">
            <div className="thecard">
              <div className="thefront">
                <img className="img-responsive" src={require(`../../components/imageshowers/${image.filename}`)} />
                <div className="name"><b>{image.name}</b></div>
              </div>
              <div className="theback">
              <h2>{image.college}</h2>
              <h3>{image.type}</h3>
              <h5>{image.department}</h5>
              <h5>{image.batch}</h5>
              </div>
            </div>
          </div>



    ))
  ) : (
    <p>No images found</p>
  )
) : (
  <p>Loading...</p>
)}

</div></>
  );
};

export default International;

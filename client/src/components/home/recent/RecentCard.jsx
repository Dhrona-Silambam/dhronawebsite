import React from "react"
import { list } from "../../data/Data"


const RecentCard = () => {
  const redirectToGMapLocation = (location) => {
    // Format the Google Maps URL with the location coordinates
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
    // Redirect to the Google Maps URL
    window.location.href = googleMapsUrl;
  };
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "Chennai" ? "#25b5791a" : "#ff98001a", color: category === "Chennai" ? "#25b579" : "#ff9800" }}>{category}</span>
                 
                </div>
                <h4>{name}</h4>
                <p>
               
                </p>
              </div>
              <div className='button flex'>
                <div>
                <button className='btn2' onClick={() => redirectToGMapLocation(location)}>{price}</button> 
                </div>
                
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard

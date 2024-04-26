//Achievements
import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='heading'>
        <h1>Our Achievements</h1>
        
      </div>
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services

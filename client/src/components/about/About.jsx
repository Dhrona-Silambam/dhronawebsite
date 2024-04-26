import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
          <div className='heading'>
        <h1>About Us</h1>
        <p>"&nbsp;Our &nbsp;Academy&nbsp; Glimpse&nbsp;"</p>
      </div>

            <p>Silambam is not just a hobby, but a profound passion for us. Our Founder and Coach, Mr. Kowshik Palanisamy, envisioned transforming his love for Silambam into a full-time career after completing his engineering degree. With dedicated participation in numerous competitions, he earned the esteemed title of 'Master'. Subsequently, he diligently pursued the registration process with the Arts and Culture Development Authority of Tamil Nadu, thereby solidifying his status as an official coach.</p>
            <p>
Aware of the lack of awareness surrounding Silambam, our primary objective is to elevate this indigenous Tamil Nadu sport to the same level of prominence as cricket. In line with this vision, Mr. Palanisamy has inaugurated an academy exclusively dedicated to Silambam.</p>
            
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About

import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>
                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>
                        {index === 0 ? (
                          <a href={val.linkedinLink} target='_blank' rel='noopener noreferrer'>
                            {icon}
                          </a>
                        ) : index === 1 ? (
                          <a href={val.instagramLink} target='_blank' rel='noopener noreferrer'>
                            {icon}
                          </a>
                        ) : (
                          icon
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className='button flex'>
                    <button>
                      <a href={`tel:${val.phoneNumber}`}>
                        <i className='fa fa-phone-alt'></i>
                        Call
                      </a>
                    </button>
                    <button className='btn4'>
                      <a href={`mailto:${val.email}`}>
                        <i className='fa fa-envelope'></i>
                        Message
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

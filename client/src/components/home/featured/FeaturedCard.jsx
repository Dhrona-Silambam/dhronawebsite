import React from "react"
import { featured } from "../../data/Data"
import { Link } from 'react-router-dom';

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <Link key = {index} to={items.redirectPageLink}>
            <div className='box' key={index}>
              <img src={items.cover} alt='' />
              <h4>{items.name}</h4>
              <h4>{items.total}</h4>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard

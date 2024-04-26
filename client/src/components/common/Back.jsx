import React from "react"

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          
          <h1>Dhrona Silambam</h1>
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  )
}

export default Back

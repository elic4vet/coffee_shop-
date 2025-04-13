import React from 'react'
import photo from '../../../assets/pinkcrop.jpg'

const about = () => {
  return (
    <>
      <div className="container flex-column justify-content-center align-items-center text-center mt-5">
        <h1>About Us</h1>
        <p>We are passionate about coffee and we want to share that passion with you.</p>
        <p>Our coffee shop is a place where you can relax, unwind, and enjoy a cup of coffee.</p>
        <p>We believe that coffee is not just a drink, it's an experience.</p>
        <p>We want to create a space where you can come and enjoy that experience.</p>

        <img src={photo} alt="image" className='w-100' />
      </div>
    </>
  )
}

export default about
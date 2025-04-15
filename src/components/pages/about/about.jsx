import React from 'react'
import about_photo from '../../../assets/pinkcrop.jpg'

const about = () => {
  return (
    <>
      <div className="container flex-column justify-between mt-5 align-items-center">

        <div className="flex flex-column justify-betweenphoto-container mt-20 mb-5">
          <img src={about_photo} alt="image" className="w-100 rounded-lg" />
          <div className="text-start mt-5 mb-5 flex-column justify-between ml-5 w-100">
            <h3 className='mb-2'>About Us</h3>
            <p className='mb-1'>We are passionate about coffee and we want to share that passion with you.</p>
            <p className='mb-1'>Our coffee shop is a place where you can relax, unwind, and enjoy a cup of coffee.</p>
            <p className='mb-1'>We believe that coffee is not just a drink, it's an experience.</p>
            <p className='mb-1'>We want to create a space where you can come and enjoy that experience.</p>
          </div>
        </div>

        <div className="flex flex-row mt-5 rounded-lg">
          <div className="flex flex-row justify-content-center align-items-center gap-3 ">
            <img src={about_photo} alt="" className='w-60 rounded-lg"' />
            <img src={about_photo} alt="" className='w-60 rounded-lg"' />
            <img src={about_photo} alt="" className='w-60 rounded-lg"' />
          </div>
        </div>
      </div>

    </>
  )
}

export default about
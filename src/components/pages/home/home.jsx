import React from 'react'
import banner from '../../../assets/pinkcrop2.jpg'

const home = () => {
    return (
        <>
            <div className="hero-container">
                <div className="hero-image">
                    <img src={banner} alt="Coffee Shop" className='banner-img' />
                </div>
                <div className="hero-content">
                    <h1>Welcome to Our Coffee Shop</h1>
                    <p>Experience the best coffee in town!</p>
                    <button className="hero-button">
                    <a href="/services" className="hero-button">Order Now</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default home
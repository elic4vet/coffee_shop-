import React from 'react'
import photo from '../../../assets/pinkcrop.jpg'

const about = () => {
  return (
    <> 
    <div> About</div>
    <p>We are a coffee shop that serves the best coffee in town.</p>
    <p>Our mission is to provide our customers with the best coffee experience.</p>
    <p>We source our coffee beans from the best farms around the world.</p>
    <p>Our coffee is freshly brewed and served with love.</p>
    <img src={photo} alt="image" />

    </>
  )
}

export default about
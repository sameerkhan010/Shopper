import React from 'react'
import "./Offers.css"
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
         <h1> Exclusive Offers</h1>
         <h1>Only For You</h1>
         <p>Get the best deals and discounts on your favorite products</p>
         <button>Check Now</button>
        </div>
        <div className="offers-right">
          <img src={exclusive_image} alt="" />
        </div>
      
    </div>
  )
}

export default Offers

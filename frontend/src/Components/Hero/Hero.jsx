// import React from "react";
import "./Hero.css";
// import hand_icon from "../Assets/hand_icon.png";
// import arrow_icon from "../Assets/arrow.png";
// import same111 from "../Assets/same111.png";

const Hero = () => {
  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="card_wrapper">
            <div className="card">
              <div className="card-image-with-svg-mask">
                <p className="text">
                  <h1>Welcome to [SHOPPER] –</h1>
                  Where Style Meets Convenience!Discover the latest trends,
                  must-have essentials, and unbeatable deals, all in one place.
                  Shop confidently with fast shipping, easy returns, and 24/7
                  customer support.
                  <span>New Arrivals Just Landed...!</span>Upgrade your wardrobe,
                  home, or gadgets with our freshest collection. Don't miss out!
                </p>
              </div>
            </div>
            <div className="button top-center">
              <span className="text">Chameleons</span>
            </div>
            <div className="button bottom-right">
              <span className="text">
                <i className="fa-solid fa-quote-left"></i> Be adaptable like a
                chameleon, but never lose your true colors.
                <i className="fa-solid fa-quote-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // <div classNameName="hero">
  //   <div classNameName="hero-left">
  //     <h2>NEW ARRIVALS ONLY</h2>
  //     <div>
  //       <div classNameName="hero-hand-icon">
  //         <p>New</p>
  //         <img src={hand_icon} alt="" />
  //       </div>
  //       <p>Collection</p>
  //       <p>For Everyone</p>
  //     </div>
  //     <div classNameName="hero-latest-btn">
  //       <div>Latest Collection</div>
  //       <img src={arrow_icon} alt="" />
  //     </div>
  //   </div>
  //   <div classNameName="hero-right">
  //     <img src={same111} alt="" />
  //   </div>
  // </div>
};

export default Hero;

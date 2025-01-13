import React from 'react';
import { Link } from 'react-router-dom';
import useGlobalContext from '../../hooks/useGlobalContext';

const HomeHeroSingleSlide = ({ bg_className,text1,text2,text3}) => {
   const videoPopup = useGlobalContext();
   const {setIsOpen} = videoPopup
   return (
      <>
         <div className={`single-slider slider-height d-flex align-items-center slider_bg_${bg_className}`}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                     <div className="hero-text">
                        <div className="hero-slider-caption ">
                           <h5>{text1}</h5>
                           <h1>{text2}</h1>
                           <p>{text3}</p>
                           
                        </div>
                        <div className="hero-slider-btn">
                           <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Contact Us</Link>

                           {/* <button onClick={() => setIsOpen(true)}
                              className="play-btn popup-video"><i className="fas fa-play"></i></button> */}

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeHeroSingleSlide;
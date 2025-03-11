import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useGlobalContext from '../../../hooks/useGlobalContext';
import { Link } from 'react-router-dom';

const PortfolioSliderArea = () => {
    const { SlickArrowLeft, SlickArrowRight } = useGlobalContext();
    const settings = {
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: true,
        prevArrow: <SlickArrowLeft/>,
        nextArrow: <SlickArrowRight/>,

    };
    return (
        <>

            <section className="portfolio-area pt-120 pb-120">
                <div className="container">
              <div className="row">
                                <div className="col-xl-6 col-lg-7 col-md-10">
                                   <div className="section-title pos-rel mb-75">
                                      <div className="section-icon">
                                         <img className="section-back-icon back-icon-left" style={{ opacity: 0.3,height:'120px' }} src="img/section/portfolio.png" alt=""/>
                                      </div>
                                      <div className="section-text pos-rel">
                                         {/* <h5>Our Team</h5> */}
                                         <h1>Portfolio</h1>
                                      </div>
                                      <div className="section-line pos-rel">
                                         <img src="img/shape/section-title-line.png" alt=""/>
                                      </div>
                                   </div>
                                </div>
                                
                             </div>
                <div className="row">
                    <Slider className='postbox__gallery mb-35' {...settings}>

                        <img src="img/portfolio/port1.jpg" alt="portfolio image" />
                        <img src="img/portfolio/lg-2.jpg" alt="portfolio image" />
                        <img src="img/portfolio/lg-3.jpg" alt="portfolio image" />
                        <img src="img/portfolio/lg-4.jpg" alt="portfolio image" />

                    </Slider>
                    </div>
                </div>
            </section>

        </>
    );
};

export default PortfolioSliderArea;
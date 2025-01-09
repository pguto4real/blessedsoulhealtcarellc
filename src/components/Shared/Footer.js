import React from 'react';
import { Link } from 'react-router-dom';
import HomeSingleFooterBlog from '../HomeSingleFooterBlog/HomeSingleFooterBlog';

const Footer = () => {
   return (
      <>
         <footer>
            <div className="footer-top primary-bg footer-map pos-rel pt-120 pb-80">
               <div className="container">
                  <div className="row align-items-center" style={{ position: 'relative', zIndex: '9999' }}>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="footer-contact-info footer-contact-info-3 mb-40">
                           <div className="footer-logo mb-35 bg-primary">
                              <Link to="/"><img src="img/logo/inverted-slogan.jpg" alt="" style={{ backgroundColor: "transparent" }}  /></Link>
                           </div>
                           
                           <div className="footer-emailing">
                              <ul>
                                 <li><i className="far fa-envelope"></i>info@blessedsoulhealthcarellc.com</li>
                                 <li><i className="far fa-clone"></i>+1 214 960 7853</li>
                                 <li><i className="far fa-flag"></i>6906 Spanky Branch Dr, Dallas, Tx 75248</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="footer-widget mb-40">
                           <div className="footer-title">
                              <h3>Departments</h3>
                           </div>
                           <div className="footer-menu footer-menu-2">
                              <ul>
                              <li>Personalized Care</li>
                                            <li>Comfortable living spaces</li>
                                            <li>Engaging Activities</li>
                                            <li>24/7 Support</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     {/* <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="footer-widget mb-40">
                           <div className="footer-title">
                              <h3>News Feeds</h3>
                           </div>
                           <div className="blog-feeds pe-15">
                              <HomeSingleFooterBlog image="1" />
                              <HomeSingleFooterBlog image="2" />
                              <HomeSingleFooterBlog image="3" />
                           </div>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
            <div className="footer-bottom pt-25 pb-20">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="footer-copyright footer-copyright-3 text-center">
                           <p>Copyright by@ BlessesSoulHealthCareLlc - 2025</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
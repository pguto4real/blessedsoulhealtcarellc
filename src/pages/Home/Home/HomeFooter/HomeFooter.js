import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const HomeFooter = () => {
    return (
        <>
            <footer>
                <div className="footer-top primary-bg pt-115 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="footer-contact-info mb-30">
                                    <div className="emmergency-call fix">
                                        <div className="emmergency-call-icon f-left">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="emmergency-call-text f-left">
                                            <h6>Emergency number</h6>
                                            <span>+1 214 960 7853</span>
                                        </div>
                                    </div>
                                    <div className="footer-logo mb-35">
                                        <Link to="/"><img src="img/logo/slogan.jpg" alt=""/></Link>
                                    </div>
                                    <div className="footer-contact-content mb-25">
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p> */}
                                    </div>
                                    <div className="footer-emailing">
                                        <ul>
                                            <li><i className="far fa-envelope"></i>info@blessedsoulhealthcarellc.com</li>
                                            {/* <li><i className="far fa-clone"></i>examplemedical.com</li> */}
                                            <li><i className="far fa-flag"></i>6906 Spanky Branch Dr, Dallas, Tx 75248</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>Departments</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li>Personalized Care</li>
                                            <li>Comfortable living spaces</li>
                                            <li>Engaging Activities</li>
                                            <li>24/7 Support</li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 d-md-none d-lg-block">
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/#about">About Us</Link></li>
                                            <li><Link to="/#services">Services</Link></li>
                                            <li><Link to="/#teams">Our Team</Link></li>
                                            
                                            <li><Link to="/contact">Contact Us</Link></li>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-25 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-copyright text-center">
                                    <p className="white-color">Copyright by@ BlessesSoulHealthCareLlc - 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomeFooter;
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Sidebar from '../../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../../hooks/useGlobalContext';

const HomeHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className="top-bar d-none d-md-block">
               <div className="container">
                  <div className="row d-flex align-items-center">
                     <div className="col-xl-6 offset-xl-1 col-lg-8 offset-lg-1 col-md-9 pt-2 pb-2 offset-md-1">
                        <div className="header-info">
                           <span><i className="fas fa-phone"></i> +1 214 960 7853</span>
                           <span><i className="fas fa-envelope"></i> info@blessedsoulhealthcarellc.com</span>
                        </div>
                     </div>
                     
                  </div>
               </div>
            </div>

            <div className={stickyMenu ? "header-menu-area sticky_menu" : "header-menu-area"}>
               <div className="container menu_wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                        <div className="logo logo-circle pos-rel">
                           <Link to="/"><img style={{ height: '90px',width:'130px' }} src="img/logo/logowhitetext.png" alt=""  /></Link>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-6 col-6">
                        <div className="header-right f-right">
                           
                           {/* <div className="header-social-icons f-right d-none d-xl-block">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                 <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                 <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                 <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                              </ul>
                           </div> */}
                        </div>
                        <div className="header__menu f-right">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><Link to="/">Home </Link>
                                    
                                 </li>
                                 <li><Link to="/#about">About Us </Link>
                                    
                                 </li>
                                 <li><Link to="/#services">Services </Link>
                                    
                                 </li>
                                 <li><Link to="/#teams">Teams </Link>
                                    
                                 </li>
                                 {/* <li><Link to="/shop">Shop</Link>
                                    
                                 </li>
                                 <li><Link to="/blogs">News </Link>
                                    
                                 </li>
                                 <li><a href="#">Pages +</a> */}
                                    
                                 {/* </li> */}
                              </ul>
                           </nav>
                        </div>

                        <div className="side-menu-icon d-lg-none text-end">
                           <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeHeader;
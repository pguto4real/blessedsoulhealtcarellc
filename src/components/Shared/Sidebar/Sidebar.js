import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { HashLink as Link } from 'react-router-hash-link';

const Sidebar = ({ show, handleClose }) => {
   const Home = <NavLink to="/home">Home</NavLink>
   const Department = <NavLink to="/services">Department </NavLink>
   const Doctors = <NavLink to="/doctors">Doctors </NavLink>
   const Shop = <NavLink to="/shop">Shop</NavLink>
   const News = <NavLink to="/blogSidebar">News</NavLink>
   const Pages = <a href="#">Pages</a>
   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
               </Offcanvas.Header>
               <Offcanvas.Body>
<ul>
                                 <li className='sidebar__menu--li'><Link to="/">Home </Link>
                                    
                                 </li>
                                 <li className='sidebar__menu--li'><Link to="/#about">About Us </Link>
                                    
                                 </li>
                                 <li className='sidebar__menu--li'><Link to="/#services">Services </Link>
                                    
                                 </li>
                                 <li className='sidebar__menu--li'><Link to="/#teams">Our Team </Link>
                                    
                                 </li>
                                 
                              </ul>

               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;
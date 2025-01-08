import React from 'react';
import { Link } from 'react-router-dom';

const HomeSIngleService = ({ icon, title, border_class,sub}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className={border_class ? `service-box ${border_class} text-center mb-30` : 'service-box text-center mb-30'}>
               <div className="service-thumb">
                  <img src={icon} alt="" style={{ width: "122px", height: "120px"}}/>
               </div>
               <div className="service-content">
                  <h3>{title}</h3>
                  <p>{sub}</p>
                  {/* <Link className="service-link" to="/servicesDetails">Read More</Link> */}
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSIngleService;
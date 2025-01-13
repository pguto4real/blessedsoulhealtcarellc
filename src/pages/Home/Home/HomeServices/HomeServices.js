import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';

const HomeServices = () => {
   return (
      <>
         <section className="servcies-area gray-bg pt-115 pb-90" id='services'>
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel home_ser_title">
                           {/* <h5>Departments</h5> */}
                           <h1>Our Services</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <HomeSIngleService icon="img/services/personalized.png" title="Personalized Care" sub="Assistance with daily activities, medication managements and customized care plans" />
                  <HomeSIngleService icon="img/services/lounge.png" title="Comfortable living spaces" sub="Thoughtfully designed private or shared accommodations with modern amenities to ensure safety and comfort."/>
                  <HomeSIngleService icon="img/services/engagement.png" title="Engaging Activities" sub="Social, recreational, and wellness programs to encourage physical activity, mental stimulation, and emotional well being." />
                  <HomeSIngleService icon="img/services/customer-care.png" title="24/7 Support" sub="Round-the-clock professional staff committed to ensuring residents feel safe, secure and, cared for at all times."/>
                  {/* <HomeSIngleService icon="5" title="Neurology Sargery" />
                  <HomeSIngleService icon="6" title="Allergic Issue" /> */}

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;
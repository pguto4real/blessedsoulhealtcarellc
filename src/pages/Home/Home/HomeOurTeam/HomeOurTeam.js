import React from 'react';
import { Link } from 'react-router-dom';
import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';
import SingleTeam from '../../../../components/SingleTeam/SingleTeam';

const HomeOurTeam = () => {
   return (
      <>
         <section className="team-area pt-115 pb-55" id='teams'>
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-10">
                     <div className="section-title pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Our Team</h5>
                           <h1>A Professional & Care Provider</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                     <div className="section-button text-end d-none d-lg-block pt-80 team_btn">
                        <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Make Appointment</Link>
                     </div>
                  </div>
               </div>
               <div className="row">
               <SingleTeam number={1} image="img/team/yinka.jpg"  name="Esther" title="Founder" />
                  {/* <SingleTeam number={2} image="img/team/yinka3.jpg" name="Hekim D. Rswana" title="dentist" /> */}
                  {/* <SingleTeam number={3} image="img/team/yinka.jpg" name="Tarana Halim" title="neurologist" /> */}
                  {/* <SingleTeam number={4} image="img/team/member2.png" name="Kelian M. Habblu" title="operator" /> */}
                  {/* <HomeSingleTeam image="img/team/yinka.jpg" height="270px"  title="Name" subtitle="Title" />
                  <HomeSingleTeam image="img/team/member2.png" title="Name" subtitle="Title"/>
                  <HomeSingleTeam image="img/team/member1.png" title="Name" subtitle="Title"/>
                  <HomeSingleTeam image="img/team/member1.png" title="Name" subtitle="Title" />
                  <HomeSingleTeam image="img/team/member1.png" title="Name" subtitle="Title" />
                  <HomeSingleTeam image="img/team/member1.png" title="Name" subtitle="Title"/> */}

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeOurTeam;
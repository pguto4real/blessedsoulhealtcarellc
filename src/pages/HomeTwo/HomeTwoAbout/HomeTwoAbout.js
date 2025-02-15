import React from "react";
import { Link } from "react-router-dom";
import HomeTwoSingleAbout from "../../../components/HomeTwoSingleAbout/HomeTwoSingleAbout";

const HomeTwoAbout = () => {
  return (
    <>
      <section className="about-area about-area-mid pt-120 pb-90">
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-6 col-lg-12 col-md-12">
                     <div className="row">

                        <HomeTwoSingleAbout icon="1" title="Ri Care" spacing="b-40" />
                        <HomeTwoSingleAbout icon="2" title="Hospice Care" spacing="t-40" />
                        <HomeTwoSingleAbout icon="3" title="Daily Care" spacing="b-30" />
                        <HomeTwoSingleAbout icon="4" title="Neuorology Care" spacing="t-40 mb-30" />

                     </div>
                  </div> */}

            <div className="col-xl-6 col-lg-12 col-md-11">
              <div className="about-right-side pt-25 mb-30">
                <div
                  className="about-title mb-20"
                  style={{ textAlign: "center" }}
                >
                  <h5>Core Value</h5>
                  {/* <h1>Short Story About MediDove Clinic.</h1> */}
                </div>
                <div className="about-text">
                  <p>
                    {" "}
                    Our core values guide every aspect of the care and support
                    we provide to our residents and their families.
                  </p>
                  <br />
                </div>
                <div className="about-text-list mb-40">
                  <ul>
                    <li>
                      <i className="fa fa-check"></i>
                      <span>COMPASSION</span>
                      <p>
                        We approach every interaction with kindness, empathy,
                        and a genuine commitment to enhancing the well-being of
                        our residents. Our team fosters an environment of warmth
                        and understanding, ensuring that every individual feels
                        valued and supported.
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <span>INTEGRITY</span>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <span>RESPECT</span>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <span>EXCELLENCE</span>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <span>COMMUNITY</span>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <span>INNOVATION</span>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <span>FAMILY-CENTERED CARE</span>
                    </li>
                  </ul>
                </div>
                {/* <div className="button-area">
                           <Link to="/about" className="primary_btn btn-icon ml-0"><span>+</span>learn more</Link>
                        </div> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-11">
              <div className="about-right-side pt-25 mb-30">
                <div className="about-title mb-20">
                  <h5 className="pink-color">Our Vision</h5>
                  {/* <h1>Short Story About MediDove Clinic.</h1> */}
                </div>
                <div className="about-text">
                  <p>
                    {" "}
                    Our goal is to create a welcoming sanctuary that feels like
                    home, where residents thrive through compassionate care,
                    meaningful connections, and a commitment to holistic
                    well-being.
                  </p>
                  <br />
                </div>
                {/* <div className="about-text-list mb-40">
                           <ul>
                              <li><i className="fa fa-check"></i><span>Where compassion meets comfort.</span></li>
                              <li><i className="fa fa-check"></i><span>Eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
                              <li><i className="fa fa-check"></i><span>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co.</span></li>
                              <li><i className="fa fa-check"></i><span>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co.</span></li>
                              <li><i className="fa fa-check"></i><span>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co.</span></li>
                           </ul>
                        </div>
                        <div className="button-area">
                           <Link to="/about" className="primary_btn btn-icon ml-0"><span>+</span>learn more</Link>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTwoAbout;

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
                      <p>
                        Honesty, transparency, and ethical responsibility define
                        our approach to care. We hold ourselves to the highest
                        standards of professionalism, ensuring that every
                        decision and action is guided by what is best for our
                        residents and their families.
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <span>RESPECT</span>
                      <p>
                        We honor the dignity, individuality, and personal
                        choices of each resident. By fostering a culture of
                        respect and inclusivity, we create a welcoming
                        environment where everyone feels heard, valued, and
                        empowered.
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <span>EXCELLENCE</span>
                      <p>
                        We are committed to delivering the highest quality of
                        care, continuously improving our services, and exceeding
                        expectations. Through ongoing education, training, and a
                        passion for best practices, we ensure that our residents
                        receive the best possible experience.
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <span>COMMUNITY</span>
                      <p>
                        A strong sense of belonging and connection is at the
                        heart of our care. We cultivate a vibrant, engaging
                        community where residents form meaningful relationships,
                        share experiences, and feel truly at home.
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <span>INNOVATION</span>
                      <p>
                        We embrace new ideas, technologies, and care approaches
                        to enhance the lives of our residents. By staying at the
                        forefront of advancements in healthcare and wellness, we
                        provide progressive solutions that improve quality of
                        life.
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <span>FAMILY-CENTERED CARE</span>
                      <p>
                        We believe that families play an essential role in a
                        resident’s journey. By fostering open communication,
                        collaboration, and partnership, we ensure that loved
                        ones remain actively involved, creating a supportive and
                        nurturing environment for all.
                      </p>
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
                    Our goal is to create a warm, welcoming sanctuary that truly
                    feels like home—a place where residents can live with
                    dignity, joy, and a sense of belonging. We are committed to
                    fostering an environment where individuals thrive through
                    compassionate care, meaningful connections, and a holistic
                    approach to well-being that nurtures the mind, body, and
                    spirit.
                  </p>
                  <p>
                    We recognize that every resident is unique, with personal
                    histories, preferences, and aspirations that shape their
                    journey. Our dedicated team works tirelessly to ensure that
                    each person receives the highest quality of personalized
                    care, tailored to meet their physical, emotional, and social
                    needs. Whether through engaging activities, wellness
                    programs, or daily interactions filled with kindness and
                    understanding, we strive to create an atmosphere that
                    promotes fulfillment, independence, and continuous growth.
                  </p>
                  <p>
                    More than just a place to reside, our community is a
                    vibrant, supportive, and enriching home where lifelong
                    friendships are formed, memories are cherished, and every
                    individual feels valued and respected. Through innovative
                    care practices, enriching social experiences, and a strong
                    sense of community, we aim to empower our residents to live
                    each day with purpose and joy.
                  </p>
                  <p>
                    Our unwavering commitment to excellence drives us to
                    continuously improve and adapt, ensuring that our residents
                    experience the highest standards of care, comfort, and
                    happiness. At the heart of everything we do is the belief
                    that everyone deserves to age gracefully in an environment
                    filled with love, warmth, and unwavering support.
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

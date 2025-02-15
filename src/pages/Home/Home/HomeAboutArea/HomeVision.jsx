import React from "react";

const HomeVision = () => {
  return (
    <>
      <section className="about-area about-area-mid ">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <div className="section-title text-center pos-rel mb-45">
                <div className="section-icon">
                  {/* <img
                        className="section-back-icon"
                        src="img/section/section-back-icon.png"
                        alt=""
                      /> */}
                  {/* <img className="section-back-icon" src="data:image/png;base64,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" alt="external-worth-design-thinking-phatplus-lineal-phatplus"></img> */}
                </div>
                <div className="section-text pos-rel home_ser_title">
                  {/* <h5>Departments</h5> */}
                  <h1>Our Vision</h1>
                </div>
                <div className="section-line pos-rel">
                  <img src="img/shape/section-title-line.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="about-text-list mb-40" style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                 
                }}>
              <ul
              className="home-vission-ul"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                  width: "80%",
                }}
              >
                <li className="col-xl-12 col-lg-12 col-md-12" >
                  <i className="fa fa-check"></i>
                  <span className="homeVisionSpan">Creating a True Home</span>
                  <p>
                
                    Our goal is to create a warm, welcoming sanctuary that truly
                    feels like home—a place where residents can live with
                    dignity, joy, and a sense of belonging. We are committed to
                    fostering an environment where individuals thrive through
                    compassionate care, meaningful connections, and a holistic
                    approach to well-being that nurtures the mind, body, and
                    spirit.
                  </p>
                </li>
                <li className="col-xl-12 col-lg-12 col-md-12">
                  <i className="fa fa-check"></i>
                  <span className="homeVisionSpan">Personalized and Compassionate Care</span>
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
                </li>
                <li className="col-xl-12 col-lg-12 col-md-12">
                  <i className="fa fa-check"></i>
                  <span className="homeVisionSpan">A Vibrant and Supportive Community</span>
                  <p>
                    {" "}
                    More than just a place to reside, our community is a
                    vibrant, supportive, and enriching home where lifelong
                    friendships are formed, memories are cherished, and every
                    individual feels valued and respected. Through innovative
                    care practices, enriching social experiences, and a strong
                    sense of community, we aim to empower our residents to live
                    each day with purpose and joy.
                  </p>
                </li>
                <li className="col-xl-12 col-lg-12 col-md-12">
                  <i className="fa fa-check"></i>
                  <span className="homeVisionSpan">Commitment to Excellence</span>
                  <p>
                    {" "}
                    Our unwavering commitment to excellence drives us to
                    continuously improve and adapt, ensuring that our residents
                    experience the highest standards of care, comfort, and
                    happiness. At the heart of everything we do is the belief
                    that everyone deserves to age gracefully in an environment
                    filled with love, warmth, and unwavering support.
                  </p>
                </li>
              </ul>
            </div>
            {/* <div class="col-xl-6 col-lg-6 col-md-6"></div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeVision;

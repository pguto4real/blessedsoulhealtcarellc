import React from "react";

const HomeAboutArea = () => {
  return (
    <section className="about-area pt-120 pb-90" id="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5 about_left">
            <div className="medical-icon-brand-2">
              <img src="img/about/medical-brand-icon-border.png" alt="" />
            </div>
            <div className="about-left-side pos-rel mb-30">
              {" "}
              <div className="about-front-img">
                <img src="img/about/about-img-4.jpg" alt="" />
              </div>
              <div className="about-shape">
                <img src="img/about/about-shape.png" alt="" />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-7 "
            // style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div className="about-right-side pt-10 mb-30">
              <div className="about-title mb-20">
                <h5>About Us</h5>
              </div>
              <div className="about-text mb-30">
                <p>
                  We are deeply committed to providing a safe, nurturing, and
                  supportive environment where residents can truly thrive,
                  embracing life with dignity, independence, and a sense of
                  fulfillment. Our mission is to offer exceptional,
                  individualized care that is thoughtfully designed to meet the
                  unique physical, emotional, cognitive, and social needs of
                  every resident. We understand that each person has a story, a
                  history, and personal preferences that shape their
                  experiences, and we take pride in delivering compassionate,
                  person-centered care that honors their individuality.
                </p>
                <p>
                  Our community is built on the foundation of trust, respect,
                  and genuine human connection. We strive to cultivate an
                  atmosphere where residents feel a strong sense of belonging,
                  purpose, and joy. Through engaging activities, enriching
                  social programs, and holistic wellness initiatives, we
                  encourage meaningful interactions, continuous personal growth,
                  and overall well-being.
                </p>
              </div>
              {/* <div className="our-destination">
                <div className="single-item mb-30">
                  <div className="mv-icon f-left">
                    <img src="img/about/destination-icon-1.png" alt="" />
                  </div>
                  <div className="mv-title fix">
                    <h3>Core Values</h3>
                    <p>
                      Our core values guide every aspect of the care and support
                      we provide to our residents and their families.
                    </p>
                    <ul className="professinals-list">
                      <li>
                        <i className="fa fa-check"></i>
                        COMPASSION
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        INTEGRITY
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        RESPECT
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        EXCELLENCE
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        COMMUNITY
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        INNOVATION
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        FAMILY-CENTERED CARE
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-item">
                  <div className="mv-icon f-left">
                    <img src="img/about/destination-icon-2.png" alt="" />
                  </div>
                  <div className="mv-title fix">
                    <h3>Our Vision</h3>
                    <p>
                      Our goal is to create a welcoming sanctuary that feels
                      like home, where residents thrive through compassionate
                      care, meaningful connections, and a commitment to holistic
                      well-being.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutArea;

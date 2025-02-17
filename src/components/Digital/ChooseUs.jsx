import React from "react";
import { Link } from "gatsby";
import chooseUsData from "data/Digital/chooseus.json";

const ChooseUs = () => {
  return (
    <section
      className="choose-us section-padding pt-0 style-1"
      data-scroll-index="3"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head mb-60">
                <h6 className="color-main text-uppercase wow fadeInUp">
                  Why Choose Us
                </h6>
                <h2 className="wow fadeInUp">
                  Transform & Elevate{" "}
                  <span className="fw-normal">Your Business</span>
                </h2>
              </div>
              <div className="text">
                We specialize in empowering businesses with tailored IT
                solutions, streamlined processes, and innovative technologies
                that ensure long-term success.
              </div>
              <ul>
                {chooseUsData.map((item, index) => (
                  <li className="wow fadeInUp" key={index}>
                    <span className="icon">
                      <i className="bi bi-check2"></i>
                    </span>
                    <h6>{item}</h6>
                  </li>
                ))}
              </ul>

              <Link
                to="/page-about-5"
                className="btn butn-gard border-0 text-white wow fadeInUp"
              >
                <span>Our Process</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/choose_us/choose_lines.svg"
        alt="Decorative Lines"
        className="choose-us-img"
      />
      <img
        src="/assets/img/choose_us/choose_brands.png"
        alt="Partner Brands"
        className="choose-us-brands"
      />
      <img
        src="/assets/img/choose_us/choose_bubbles.png"
        alt="Decorative Bubbles"
        className="choose-us-bubbles"
      />
    </section>
  );
};

export default ChooseUs;

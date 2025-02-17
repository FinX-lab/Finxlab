import React from "react";
import { Link } from "gatsby";
import chooseUsData from "data/Digital/chooseusbussiness.json";

const ChooseBusiness = () => {
  return (
    <section
      className="choose-us section-padding pt-0 style-1"
      style={{ margin: "12rem 0" }}
      data-scroll-index="3"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-lg-6">
            <div className="info">
              <div className="section-head mb-60">
                <h6 className="color-main text-uppercase wow fadeInUp">
                  Why Choose Us
                </h6>
                <h2 className="wow fadeInUp">
                  Accelerate & Elevate{" "}
                  <span className="fw-normal">Your Business Growth</span>
                </h2>
              </div>
              <div className="text">
                We provide strategic business solutions, optimized operations, 
                and innovative growth strategies to enhance efficiency, 
                profitability, and long-term success.
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

          {/* Right Side - Images */}
          {/* <img
        src="/assets/img/choose_us/choose_lines.svg"
        alt="Decorative Lines"
        className="choose-us-img"
        style={{marginLeft:"50%"}}
      /> */}
      <img
        src="/assets/img/choose_us/choose_brands.png"
        alt="Partner Brands"
        className="choose-us-brands"
        style={{marginLeft:"55%"}}
      />
      {/* <img
        src="/assets/img/choose_us/choose_bubbles.png"
        alt="Decorative Bubbles"
        className="choose-us-bubbles"
      /> */}
        </div>
      </div>
    </section>
  );
};

export default ChooseBusiness;

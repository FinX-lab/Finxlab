import React, { useState, useEffect, useRef } from "react";
import CountTo from "../CountTo";
import { Link } from "gatsby";
import aboutData from "data/Digital/about.json";

const About = () => {
  const numbersSectionRef = useRef(null);
  const [position, setPosition] = useState({ from: 300, to: 500 });

  useEffect(() => {
    const numbersSection = numbersSectionRef.current;
    const numbersSectionHeight = numbersSection.offsetHeight;
    const numbersSectionTop = numbersSection.offsetTop;

    const Position = {
      from: numbersSectionTop - numbersSectionHeight - 100,
      to: numbersSectionTop + numbersSectionHeight,
    };

    setPosition(Position);
  }, []);

  return (
    <section className="about style-1" data-scroll-index="1">
      <div className="container">
        <div className="content">
          <div className="about-logos d-flex align-items-center justify-content-between border-bottom border-1 brd-light pb-20">
            {aboutData.logos.map((logo, index) => (
              <a
                href="#"
                className="logo wow fadeInUp"
                data-wow-delay={index * 0.2 + "s"}
                key={index}
              >
                <img src={logo} alt="" />
              </a>
            ))}
          </div>
          <div className="about-info">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="title">
                  <h3 className="wow fadeInUp slow">
                    "Empowering Visionary Entrepreneurs Through Technology"
                  </h3>
                  <small className="wow fadeInUp slow fw-bold">
                    {/* Patricia Cross */}
                  </small>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info">
                  <h6 className="wow fadeInUp slow">
                  FINX LAB is a venture capital firm backing visionary entrepreneurs shaping the future through technology. We invest across all stages—from seed to growth—in industries like AI, biotech, consumer tech, fintech, gaming, and enterprise solutions.
                  </h6>
                  {/* <p className="wow fadeInUp slow">
                  We respect the entrepreneurial journey and understand the challenges of building a successful company. Our leadership team, composed of former founders, CEOs, and CTOs, brings deep expertise in AI, blockchain, security, and financial services.
                  </p> <br />
                  <p className="wow fadeInUp slow">
                  Beyond capital, we foster a thriving ecosystem by connecting entrepreneurs with investors, executives, engineers, and industry leaders. 
                  </p> <br /> */}
                  <p className="wow fadeInUp slow">
                  FINX LAB is dedicated to driving transformative innovation. Through strategic insights, operational expertise, and industry connections, we help portfolio companies grow and succeed in an ever-evolving marketplace.
                  </p>
                  <Link
                    to="/page-about-5"
                    className="btn btn-outline-light mt-5 sm-butn wow fadeInUp slow"
                  >
                    <span>Learn More About Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="about-numbers" ref={numbersSectionRef}>
            <div className="row">
              {aboutData.numbers.map((item, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className="num-item wow fadeInUp" data-wow-delay="0">
                    <div className="num">
                      <CountTo
                        className="counter"
                        from={0}
                        to={item.number}
                        speed={1500}
                        position={position}
                      />
                      {item.operator && (
                        <span>
                          {typeof item.operator === "string" ? (
                            item.operator
                          ) : (
                            <i className="fas fa-plus"></i>
                          )}
                        </span>
                      )}
                    </div>
                    <div className="inf">{item.info}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/assets/img/about/num_shap.png"
            alt=""
            className="about_shap"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

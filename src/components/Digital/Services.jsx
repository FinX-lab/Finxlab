import React from "react";
import { Link } from "gatsby";
import services from "data/Digital/services.json";

const Services = () => {
  return (
    <section className="services section-padding style-1" data-scroll-index="2">
      <div className="container">
        <div className="row">
          <div className="col offset-lg-1">
            <div className="section-head mb-60 text-center">
              <h6 className="color-main text-uppercase wow fadeInUp text-center">
                our services
              </h6>
              <h2 className="wow fadeInUp">
                Where Technology Meets{" "}
                <span className="fw-normal">Business Excellence </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            {services.map((service, index) => (
              <div className="col-lg-4" key={index}>
                <div
                  className="service-box mb-4 wow fadeInUp"
                  data-wow-delay={index * 0.2 + "s"}
                >
                  <h5>
                    <Link to="/page-services-5">{service.title}</Link>
                    <span className="num">{service.number}</span>
                  </h5>
                  <div className="icon">
                    <img src={service.icon} alt="" />
                  </div>
                  <div className="info">
                    <div className="text">{service.text}</div>
                    <div className="tags">
                      {service.tags.map((tag, index) => (
                        <a href="#" className="me-1" key={index}>
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src="/assets/img/services/ser_shap_l.png"
        alt=""
        className="ser_shap_l"
      />
      <img
        src="/assets/img/services/ser_shap_r.png"
        alt=""
        className="ser_shap_r"
      />
    </section>
  );
};

export default Services;

import React from "react";
import { Link } from "gatsby";
import footerData from "data/Saas/footer.json";

const Footer = () => {
  return (
    <footer className="style-5 border-top brd-gray">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title">FinxLab - Your IT Solutions Partner</div>
              <small className="text">
                With over 10 years of experience in providing IT services, we
                specialize in helping businesses grow through custom software,
                web development, and digital transformation solutions. We serve
                clients globally, offering tailored solutions for every
                industry.
              </small>
              <div className="socail-icons">
                <a
                  href="https://twitter.com/"
                  rel="noreferrer"
                  className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://facebook.com/"
                  rel="noreferrer"
                  className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://instagram.com/"
                  rel="noreferrer"
                  className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title">Contact Information</div>
              <small className="text mb-10 d-block">
                {footerData.address.address1} <br />{" "}
                {footerData.address.address2}
              </small>
              <small className="text mb-10 d-block">
                <a href="tel:015924442"> {footerData.phone}</a>
              </small>
              <small className="text d-block">
                <a href="mailto:Kathmandu@finxlab.com ">{footerData.email}</a>
              </small>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="items">
              <div className="title">Quick Links</div>
              <ul>
                {footerData.usefulLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            {/* <div className="items">
              <div className="title">Resources</div>
              <ul>
                {footerData.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="logo">
                <img src="/assets/img/logo_foot_home5.png" alt="Iteck Logo" />
              </div>
            </div>
            <div className="col-lg-6">
              <small className="small">
                © 2025 Copyrights by{" "}
                <a href="#" className="fw-bold text-decoration-underline">
                  FinxLab Co.
                </a>{" "}
                All Rights Reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

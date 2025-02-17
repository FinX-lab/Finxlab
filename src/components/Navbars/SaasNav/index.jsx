import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Navbar = ({ navbarRef }) => {
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname;
    if (path.includes("about")) return "about";
    if (path.includes("services")) return "services";
    if (path.includes("portfolio")) return "portfolio";
    if (path.includes("blog")) return "blog";
    if (path.includes("contact")) return "contact";
    return "services";
  });

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("about")) setActiveLink("about");
    else if (path.includes("services")) setActiveLink("services");
    else if (path.includes("portfolio")) setActiveLink("portfolio");
    else if (path.includes("blog")) setActiveLink("blog");
    else if (path.includes("contact")) setActiveLink("contact");
  }, [location]);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light style-1"
      ref={navbarRef}
    >
      <div className="container">
        <a className="navbar-brand" href="/home-digital-agency">
          <img src="/assets/img/logo_cd.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                href="/page-about-5"
                onClick={() => handleLinkClick("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeLink === "services" ? "active" : ""
                }`}
                href="/page-services-5"
                onClick={() => handleLinkClick("services")}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/page-portfolio-5"
                className={`nav-link ${
                  activeLink === "portfolio" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("portfolio")}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/page-blog-5"
                className={`nav-link ${activeLink === "blog" ? "active" : ""}`}
                onClick={() => handleLinkClick("blog")}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/page-contact-5"
                className={`nav-link ${
                  activeLink === "contact" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-side">
            <div className="hotline pe-4">
              <div className="icon me-3">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="cont">
                <a href="tel:015924442">
                  <h6>015 924 442</h6>
                </a>
              </div>
            </div>
            <div className="qoute-nav ps-4">
              <Link
                to="/page-contact-5"
                className="btn sm-butn butn-gard border-0 text-white"
              >
                <span>Free Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import navbarScrollEffect from "common/navbarScrollEffect";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains("dropdown-toggle")
      ? event.target
      : event.target.querySelector(".dropdown-toggle");
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add("show");
    dropDownMenu?.classList?.add("show");
  };

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains("dropdown")
      ? event.target
      : event.target.closest(".dropdown");
    const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
    const dropDownMenu = dropdown.querySelector(".dropdown-menu");

    dropDownToggler?.classList?.remove("show");
    dropDownMenu?.classList?.remove("show");
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
            <li
              className="nav-item dropdown"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className="nav-link active"
                href="/page-about-5"
                // id="navbarDropdown1"
                role="button"
                // data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
            </li>
            <li
              className="nav-item dropdown"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className="nav-link"
                href="/page-services-5"
                // id="navbarDropdown2"
                role="button"
                // data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                {/* <li>
                  <Link to="/page-about-5" className="dropdown-item">
                    About
                  </Link>
                </li>
                <li></li>
                <li>
                  <Link to="/page-services-5" className="dropdown-item">
                    Services
                  </Link>
                </li> */}

                <li></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/page-portfolio-5" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link to="/page-blog-5" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/page-contact-5" className="nav-link">
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
              {/* <a href="#" className="search-icon me-3">
                <i className="bi bi-search"></i>
              </a>
              <a href="#" className="cart-icon me-3">
                <i className="bi bi-cart"></i>
                <span className="cart-num ms-1">2</span>
              </a> */}
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

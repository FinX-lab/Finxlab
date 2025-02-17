import React, { useState } from "react";
import { Link } from "gatsby";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <header className="section-padding style-1" data-scroll-index="0">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <div className="info">
                <div className="section-head mb-60">
                  <h6 className="color-main text-uppercase">Finx Lab</h6>
                  <h2>
                    Business & IT <span className="fw-normal">Solutions</span>
                  </h2>
                </div>
                <div className="text">
                  At FinX Lab, we empower startups and established businesses by
                  providing a comprehensive blend of technology, investment, and
                  financial support. Our services include business registration,
                  strategic financing advice, private equity funding, and
                  cutting-edge IT solutions to drive growth and success.
                </div>
                <div className="bttns mt-5">
                  <Link to="/page-services-5" className="btn btn-dark">
                    <span>Explore Our Services</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="img">
                <img src="/assets/img/header/head.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/header/head_shape_r.png"
        alt=""
        className="head-shape-r wow"
      />
      <img
        src="/assets/img/header/head_shape_l.png"
        alt=""
        className="head-shape-l wow"
      />
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="pGbIOC83-So"
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;

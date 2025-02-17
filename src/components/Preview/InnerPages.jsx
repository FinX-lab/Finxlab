import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import innerPages from 'data/Preview/inner-pages.json';

const Demos = () => {
  const [innerPagesRows, setInnerPagesRows] = useState([]);

  useEffect(() => {
    let pagesInRow = 3;
    let rowIndex = 0;
    let rowsItems = [[]];

    innerPages.forEach((page, i) => {
      if (i > 0 && i % pagesInRow === 0) {
        rowIndex++;
        rowsItems[rowIndex] = [];
      }

      rowsItems[rowIndex].push(page);
    });

    setInnerPagesRows(rowsItems);
  }, []);

  return (
    <section className="demos inner_pages section-padding bg-light" id="">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-40">
              <h3 className="text-capitalize fs-1"> Inner Pages </h3>
              <p className="color-777">
                A great collection of beautiful inner pages for your need.
                Choose the best suitable template and start customizing it.
              </p>
            </div>
          </div>
        </div>
        {innerPagesRows.map((pages, r) => (
          <div className="row" key={r}>
            {pages.map((demo, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div
                  className={`item ${demo.isNew ? 'item_ribbon green' : ''} ${
                    demo.isComingSoon ? 'item_ribbon orange' : ''
                  } ${demo.isFeatured ? 'item_ribbon red' : ''}`}
                >
                  <Link to={demo.link} target="_blank">
                    <div className={`img`}>
                      {/* ${demo.isUpcoming ? ' blur_img' : ''} */}

                      <img src={demo.img} alt="" />
                    </div>
                    <div className="info">
                      <span>{demo.title}</span>
                      <h6>{demo.type}</h6>
                    </div>
                  </Link>
                  {(demo.isNew || demo.isComingSoon || demo.isFeatured) && (
                    <div className="new_demo_label">
                      <span>
                        {demo.isNew && 'New'}
                        {demo.isComingSoon && 'Soon'}
                        {demo.isFeatured && 'Hot'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Demos;

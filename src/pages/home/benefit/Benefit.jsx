import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Benefit = () => {
  return (
    <>
      <section className="container-fluid benefit-section">
        <div className="row m-0 p-0 w-100">
          <div className="col-9 mx-auto m-0 p-0">
            <div className="row">
              <div className="benefit-list-box p-0 m-0 w-100">
                <div className="d-flex flex-column align-items-center justify-content-between benefit-list-member gap-2 m-0 py-4">
                  <LazyLoadImage
                    src="/Images/benefit/superbonus.png"
                    alt="superbonus"
                    className="benefit-member-img"
                    style={{ width: "52.08px", height: "34.95px" }}
                  />
                  <h2>110%</h2>
                  <p>SUPERBONUS</p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-between benefit-list-member gap-2 py-4">
                  <LazyLoadImage
                    src="/Images/benefit/detrazione.png"
                    alt="detrazione"
                    className="benefit-member-img"
                    style={{ width: "22.01px", height: "33.01px" }}
                  />
                  <h2>65%</h2>
                  <p>Detrazione DOMOTICA</p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-between benefit-list-member gap-2 py-4">
                  <LazyLoadImage
                    src="/Images/benefit/personalite.png"
                    alt="personalite"
                    className="benefit-member-img"
                    style={{ width: "29px", height: "33px" }}
                  />
                  <p>Progettazione personalizzata</p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-between benefit-list-member gap-2 py-4">
                  <LazyLoadImage
                    src="/Images/benefit/consulinza.png"
                    alt="consulinza"
                    className="benefit-member-img"
                    style={{ width: "42px", height: "31px" }}
                  />
                  <p>consulenza fiscale sui bonus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Benefit);

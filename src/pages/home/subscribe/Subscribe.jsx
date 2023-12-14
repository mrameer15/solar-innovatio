import React from "react";
import { memo } from "react";

const Subscribe = () => {
  return (
    <>
      <section className="subscribe-section">
        <div className="row m-0 p-0 w-100">
          <div className="col-9 mx-auto p-0">
            <div className="row">
              <div className="col-lg-6 col-md-12 d-flex flex-column gap-2 left-div p-0">
                <h2>Subscribe for Newsletter</h2>
                <p>
                  Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                  vitae orci maecenas tortor odio
                </p>
              </div>
              <div className="col-lg-6 col-md-12 right-div p-0">
                <div className="d-flex align-items-center justify-content-between  email-div">
                  <p>Inserisci la tua email</p>
                  <i className="fa-brands fa-telegram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Subscribe);

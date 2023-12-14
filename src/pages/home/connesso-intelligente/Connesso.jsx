import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../../../api/connesso/ConnessoApi";
import { memo } from "react";

const Connesso = () => {
  return (
    <section className="connesso-section">
      <div className="row m-0 p-0 w-100">
        <div className="col-9 mx-auto p-0">
          <div className="row  ">
            <div className="d-flex flex-column justify-content-center align-items-center connesso">
              <h2>Connesso, Intelligente, Resistente</h2>
              <p className="heading-underline"></p>
              <div className=" connesso-list row">
                {data.map((val) => {
                  return (
                    <div
                      className="col-lg-6 col-md-12 d-flex item"
                      key={val.id}
                    >
                      <div className="icon-div d-flex flex-column h-100 ">
                        <div className="icon-radius-div d-flex flex-column justify-content-center align-items-center">
                          <LazyLoadImage src={val.image} alt={val.name} />
                        </div>
                      </div>
                      <div className="info-div d-flex flex-column justify-content-center">
                        <h2>{val.name}</h2>
                        <p>{val.info}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Connesso);

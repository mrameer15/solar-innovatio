import React, { memo } from "react";
import data from "../../../api/perche/PercheApi";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Perche = () => {
  return (
    <>
      <section className="container-fluid perche-section">
        <div className="row m-0 p-0 w-100">
          <div className="col-9 mx-auto m-0 p-0">
            <div className="row">
              <div className=" d-flex flex-column align-items-center perche p-0 m-0">
                <h2 className="heading">Perchè S.I.R.E.</h2>
                <p className="heading-underline"></p>
                <div className="d-flex justify-content-center m-0 perche-list-box">
                  {data.map((val) => {
                    return (
                      <div
                        className="d-flex flex-column align-items-center perche-list-member"
                        key={val.id}
                      >
                        <LazyLoadImage
                          src={val.image}
                          alt={val.name}
                          className="perche-member-img"
                        />
                        <div className="perche-member-info d-flex flex-column align-items-center">
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
    </>
  );
};

export default memo(Perche);

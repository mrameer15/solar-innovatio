import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Sire = () => {
  return (
    <>
      <section className="sire-section">
        <div className="row m-0 p-0 w-100 h-100">
          <div className="col-9 mx-auto p-0">
            <div className="row h-100">
              <div className="col-lg-5 col-md-12 left-div p-0">
                <LazyLoadImage
                  src="/Images/sire/satelite.png"
                  alt="satelite"
                  className="satelite-img"
                />
                <LazyLoadImage
                  src="/Images/sire/solar.png"
                  alt="solar"
                  className="solar-img"
                />
              </div>
              <div className="col-lg-7 col-md-12 d-flex flex-column justify-content-center right-div gap-1">
                <h3>S.I.R.E</h3>
                <h2 className="heading">Smart Integrated Renewable Energy</h2>
                <p className="heading-underline"></p>
                <p className="info">
                  S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo
                  per la produzione, conversione e gestione dell'energia solare,
                  studiato specificatamente per installazioni all'interno di
                  condomini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Sire);

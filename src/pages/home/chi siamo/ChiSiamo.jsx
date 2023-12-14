import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../../../api/chi-siamo/ChiSiamoApi";

const ChiSiamo = () => {
  return (
    <>
      <section className="container-fluid chi-siamo-section">
        <div className="row m-0 p-0 w-100">
          <div className="col-9 mx-auto m-0 p-0">
            <div className="row">
              <div className=" d-flex flex-column align-items-center chi-siamo p-0 m-0">
                <h2 className="heading">Chi Siamo</h2>
                <p className="heading-underline"></p>
                <p className="chi-siamo-info">
                  Solar Innovatio è una PMI innovativa italiana specializzata
                  nella progettazione e realizzazione di sistemi fotovoltaici
                  intelligenti. Solar Innovatio unisce alla decennale esperienza
                  maturata nel panorama italiano nell'ambito delle soluzioni
                  fotovoltaiche un approccio ingegneristico, innovativo,
                  digitale alla principale fonte di energia rinnovabile.
                </p>
                <div className="d-flex justify-content-center m-0 p-0 chi-siamo-list-box">
                  {data.map((val) => {
                    return (
                      <div
                        className="d-flex flex-column align-items-center chi-siamo-list-member"
                        key={val.id}
                      >
                        <LazyLoadImage
                          src={val.image}
                          alt={val.name}
                          className="chi-siamo-member-img"
                        />
                        <div className="chi-siamo-member-info d-flex flex-column align-items-center gap-2">
                          <h2>{val.name}</h2>
                          <p>{val.info}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center col-10 mx-auto chi-siamo-bottom-info">
                  <div className="col-10 bottom-info-div d-flex justify-content-between">
                    <img
                      src="/Images/chi-siamo/firstcomma.png"
                      alt="location"
                      className="double-quote-img"
                    />
                    <p>
                      Non sviluppiamo pannelli fotovoltaici. Il pannello è solo
                      una componente di una soluzione ingegneristica più
                      completa che comprende sensoristiche avanzate e
                      l'integrazione con i sistemi domotici di casa.
                    </p>
                    <img
                      src="/Images/chi-siamo/secondcomma.png"
                      alt="location"
                      className="double-quote-img"
                    />
                  </div>

                  <p className="cristian">Cristian Testoni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(ChiSiamo);

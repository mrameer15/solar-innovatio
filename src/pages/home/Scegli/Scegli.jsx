import React, { useState } from "react";
import { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Scegli = () => {
  const [technique1, setTechnique1] = useState(false); // State for the first card
  const [technique2, setTechnique2] = useState(false); // State for the second card

  const toggleDropdown = (cardNumber) => {
    if (cardNumber === 1) {
      setTechnique1((prevState) => !prevState);
    } else if (cardNumber === 2) {
      setTechnique2((prevState) => !prevState);
    }
  };
  return (
    <>
      <section className="scegli-section">
        <div className="row m-0 p-0 w-100">
          <div className="col-9 mx-auto p-0">
            <div className="row">
              <div className="d-flex flex-column justify-content-center align-items-center scegli p-0">
                <h2 className="heading">Scegli il tuo SIRE</h2>
                <p className="heading-underline"></p>
                <div className="scegli-list d-flex justify-content-between">
                  <div className=" d-flex flex-column list-card">
                    <LazyLoadImage
                      src="/Images/how it work/bysun.png"
                      alt="by sun"
                      className="card-img"
                    />
                    <div className="d-flex flex-column card-info">
                      <h2 className="top-heading">S.I.R.E Direct</h2>
                      <div className="d-flex flex-column unorder-list-box gap-3">
                        <div className="d-flex gap-3 unorder-list">
                          <div className="arrow-img d-flex flex-column">
                            <LazyLoadImage
                              src="/Images/how it work/arrow.png"
                              alt="arrow"
                            />
                          </div>
                          <p className="m-0">Sistema Plugin</p>
                        </div>
                        <div className="d-flex gap-3 unorder-list">
                          <div className="arrow-img d-flex flex-column ">
                            <LazyLoadImage
                              src="/Images/how it work/arrow.png"
                              alt="arrow"
                            />
                          </div>
                          <p className="m-0">
                            Struttura meccanizzata in poliuera e sensoristica
                            intelligente
                          </p>
                        </div>
                        <div className="d-flex gap-3 unorder-list">
                          <div className="arrow-img d-flex flex-column ">
                            <LazyLoadImage
                              src="/Images/how it work/arrow.png"
                              alt="arrow"
                            />
                          </div>
                          <p className="m-0">Pannelli alta efficienza da 1KW</p>
                        </div>
                        <div className="d-flex gap-3 unorder-list">
                          <div className="arrow-img d-flex flex-column ">
                            <LazyLoadImage
                              src="/Images/how it work/arrow.png"
                              alt="arrow"
                            />
                          </div>
                          <p className="m-0">
                            Inverter e conne ssione aII'impianto domestico
                          </p>
                        </div>
                        <div className="d-flex gap-3 unorder-list">
                          <div className="arrow-img d-flex flex-column ">
                            <LazyLoadImage
                              src="/Images/how it work/arrow.png"
                              alt="arrow"
                            />
                          </div>
                          <p className="m-0">App di controllo e gesti one</p>
                        </div>
                      </div>
                      <h2 className="middle-heading">CONSIGLIATO PER:</h2>
                      <div className="d-flex consigliato-group gap-5 ">
                        <div className="d-flex flex-column align-items-center gap-2  consigliato-member">
                          <div className="img-circle d-flex justify-content-center align-items-center ">
                            <LazyLoadImage
                              src="/Images/how it work/battery.png"
                              alt="battery"
                              className="battery-img"
                            />
                          </div>
                          <p>Devices</p>
                        </div>
                        <div className="d-flex flex-column align-items-center gap-2  consigliato-member">
                          <div className="img-circle d-flex justify-content-center align-items-center ">
                            <LazyLoadImage
                              src="/Images/how it work/group.png"
                              alt="battery"
                              className="family-img"
                            />
                          </div>
                          <p>Families</p>
                        </div>
                      </div>
                      <div className="bottom-heading">
                        <h2>Scopri le caratteristiche tecniche</h2>
                        <div className="d-flex flex-column py-2">
                          <LazyLoadImage
                            src="\Images\how it work\down-arrow.png"
                            alt="down-arrow"
                            onClick={() => toggleDropdown(1)}
                            style={{
                              transform: technique1 ? "rotate(180deg)" : null,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="drop-down-list"
                        style={{ display: technique1 ? "none" : "block" }}
                      >
                        <ul>
                          <li>
                            <span>Te mpo di ricarica medio in estate</span>
                          </li>
                          <li>
                            <span>TBD Tempo di scarica a 16A.</span>
                          </li>
                          <li>
                            <span>TBD Autonomia dalla rete elettrica.</span>
                          </li>
                          <li>
                            <span>TBD Autonomia in casa di blackout.</span>
                          </li>
                          <li>
                            <span>
                              2gg Immissione di CO2 da 1.022 kg a SOO kg annui
                            </span>
                          </li>
                          <li>
                            <span>Te mpo di ricarica medio in estate.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" d-flex flex-column list-card">
                    <LazyLoadImage
                      src="/Images/how it work/bybulb.png"
                      alt="by sun"
                      className="card-img"
                    />
                    <div className="d-flex flex-column card-info">
                      <h2 className="top-heading">S.I.R.E Full</h2>
                      <div className="d-flex flex-column unorder-list-box gap-3">
                        <div className="d-flex gap-3 unorder-list">
                          <div className="arrow-img d-flex flex-column">
                            <LazyLoadImage
                              src="/Images/how it work/arrow.png"
                              alt="arrow"
                            />
                          </div>
                          <p className="m-0">
                            Struttura meccanizzata in poliuera e sensoristica
                            intelligente
                          </p>
                        </div>
                        <div className="d-flex gap-3 unorder-list">
                          <div className="arrow-img d-flex flex-column ">
                            <LazyLoadImage
                              src="/Images/how it work/arrow.png"
                              alt="arrow"
                            />
                          </div>
                          <p className="m-0">Pannelli alta efficienza da 1KW</p>
                        </div>
                        <div className="d-flex gap-3 unorder-list">
                          <div className="arrow-img d-flex flex-column ">
                            <LazyLoadImage
                              src="/Images/how it work/arrow.png"
                              alt="arrow"
                            />
                          </div>
                          <p className="m-0">
                            Inverter e conne ssione aII'impianto domestico
                          </p>
                        </div>
                        <div className="d-flex gap-3 unorder-list">
                          <div className="arrow-img d-flex flex-column ">
                            <LazyLoadImage
                              src="/Images/how it work/arrow.png"
                              alt="arrow"
                            />
                          </div>
                          <p className="m-0">App di controllo e gesti one</p>
                        </div>
                      </div>
                      <h2 className="middle-heading ">CONSIGLIATO PER:</h2>
                      <div className="d-flex consigliato-group gap-5 ">
                        <div className="d-flex flex-column align-items-center gap-2  consigliato-member">
                          <div className="img-circle d-flex justify-content-center align-items-center ">
                            <LazyLoadImage
                              src="/Images/how it work/battery.png"
                              alt="battery"
                            />
                          </div>
                          <p>Devices</p>
                        </div>
                        <div className="d-flex flex-column align-items-center gap-2  consigliato-member">
                          <div className="img-circle d-flex justify-content-center align-items-center ">
                            <LazyLoadImage
                              src="/Images/how it work/group.png"
                              alt="battery"
                            />
                          </div>
                          <p>Families</p>
                        </div>
                      </div>
                      <div className="bottom-heading">
                        <h2>Title here if they have othervise remove this</h2>
                        <div className="d-flex flex-column py-2">
                          <LazyLoadImage
                            src="\Images\how it work\down-arrow.png"
                            alt="down-arrow"
                            onClick={() => toggleDropdown(2)}
                            style={{
                              transform: technique2 ? "rotate(180deg)" : null,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="drop-down-list"
                        style={{ display: technique2 ? "none" : "block" }}
                      >
                        <ul>
                          <li>
                            <span>Siste ma 2 kW con accumuIo.</span>
                          </li>
                          <li>
                            <span>
                              Tempo di ricarica medio in estate is 5 ore e 30
                              minuti
                            </span>
                          </li>
                          <li>
                            <span>Te mpo di scarica a 16A is 8 ore.</span>
                          </li>
                          <li>
                            <span>Autonomia dalla rete eIettrica 62Po.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Scegli);

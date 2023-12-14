import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

const Contattaci = () => {
  return (
    <>
      <section className="contact-section">
        <div className="row m-0 p-0 w-100">
          <div className="col-9 mx-auto p-0">
            <div className="row">
              <div className="d-flex flex-column justify-content-center align-items-center contact p-0">
                <h2 className="heading">CONTATTACI</h2>
                <p className="heading-underline"></p>
                <div className="d-flex justify-content-between  contact-list w-100">
                  <div className="d-flex flex-column px-4  info-div ">
                    <div className="item">
                      <NavLink to="" className="d-flex gap-3">
                        <div className="img-div d-flex flex-column">
                          <LazyLoadImage
                            src="/Images/contattaci/location.png"
                            alt="location"
                            className="contact-img"
                          />
                        </div>
                        <p className="m-0 contact-info">
                          Leo dui fermentum tristique urna tellus eget amet
                          aliquam. Id vitae orci
                        </p>
                      </NavLink>
                    </div>
                    <div className="item ">
                      <NavLink to="" className="d-flex gap-3">
                        <div className="img-div d-flex flex-column">
                          <LazyLoadImage
                            src="/Images/contattaci/mail.png"
                            alt="mail"
                            className="contact-img"
                            style={{ height: "21.31px" }}
                          />
                        </div>
                        <div className="d-flex flex-column gap-1 ">
                          <p className="m-0 contact-info">email@email.com</p>
                          <p className="m-0 contact-info">support@email.com</p>
                        </div>
                      </NavLink>
                    </div>
                    <div className="item">
                      <NavLink to="" className="d-flex gap-3">
                        <div className="img-div d-flex flex-column">
                          <LazyLoadImage
                            src="/Images/contattaci/phone.png"
                            alt="phone"
                            className="contact-img"
                            style={{ height: "23px" }}
                          />
                        </div>
                        <p className="m-0 contact-info">
                          Leo dui fermentum tristique urna tellus eget amet
                          aliquam. Id vitae orci
                        </p>
                      </NavLink>
                    </div>
                    <hr />
                    <p className="bottom-info">
                      We Will get back to you within 24 hours. Or Call us Now
                    </p>
                  </div>
                  <form className="d-flex flex-column px-4 gap-3  message-div">
                    <div className="d-flex justify-content-between gap-3 first-last-div">
                      <input
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder="First Name"
                        autoComplete="off"
                        className="w-100 fname input-field"
                      />
                      <input
                        type="text"
                        name="lname"
                        id="lname"
                        placeholder="Last Name"
                        autoComplete="off"
                        className="w-100 lname input-field"
                      />
                    </div>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      autoComplete="off"
                      className="w-100 email input-field"
                    />
                    <textarea
                      name="msg"
                      id="msg"
                      cols="30"
                      rows="5"
                      placeholder="Message"
                      autoComplete="off"
                      className="w-100 msg input-field"
                    ></textarea>
                    <div className="d-flex justify-content-end">
                      <button type="submite" className="button-div">
                        SEND
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Contattaci);

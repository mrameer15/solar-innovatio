import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div id="#top-position" className="container-fluid footer-div">
        <div className="row p-0 m-0 w-100">
          <div className="col-9 mx-auto p-0">
            <div className="footer row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex flex-column justify-content-between first-column footer-column p-0">
                <LazyLoadImage
                  src="/Images/footer/footerlogo.png"
                  alt="footer logo"
                  className="footer-logo"
                />
                <p className="m-0 p-0 w-75">
                  Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                  vitae orci maecenas tortor odio Leo dui fermentum tristique
                  urna tellus eget amet aliquam.
                </p>
                <div className="d-flex p-0">
                  <LazyLoadImage
                    src="/Images/footer/frey.png"
                    alt="footer logo"
                    className="frey"
                  />
                  <LazyLoadImage
                    src="/Images/footer/frey.png"
                    alt="footer logo"
                    className="frey"
                  />
                  <LazyLoadImage
                    src="/Images/footer/frey.png"
                    alt="footer logo"
                    className="frey"
                  />
                </div>
                <div className="d-flex p-0">
                  <LazyLoadImage
                    src="/Images/footer/frey.png"
                    alt="footer logo"
                    className="frey"
                  />
                  <LazyLoadImage
                    src="/Images/footer/frey.png"
                    alt="footer logo"
                    className="frey"
                  />
                  <LazyLoadImage
                    src="/Images/footer/frey.png"
                    alt="footer logo"
                    className="frey"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 d-flex flex-column second-column gap-3 footer-column">
                <h3 className="w-100">Quick Links</h3>
                <NavLink>
                  <p
                    className="p-0 m-0"
                    onClick={() => scrollToComponent("home")}
                  >
                    Home
                  </p>
                </NavLink>
                <NavLink>
                  <p
                    className="p-0 m-0"
                    onClick={() => scrollToComponent("chi-siamo")}
                  >
                    Chi Siamo
                  </p>
                </NavLink>
                <NavLink>
                  <p
                    className="p-0 m-0"
                    onClick={() => scrollToComponent("sire")}
                  >
                    S.I.R.E
                  </p>
                </NavLink>
                <NavLink>
                  <p
                    className="p-0 m-0"
                    onClick={() => scrollToComponent("features")}
                  >
                    SIRE Features
                  </p>
                </NavLink>
                <NavLink>
                  <p
                    className="p-0 m-0"
                    onClick={() => scrollToComponent("contattaci")}
                  >
                    Why SIRE
                  </p>
                </NavLink>
                <NavLink>
                  <p
                    className="p-0 m-0"
                    onClick={() => scrollToComponent("product")}
                  >
                    SIRE Product
                  </p>
                </NavLink>
                <NavLink>
                  <p
                    className="p-0 m-0"
                    onClick={() => scrollToComponent("how-work")}
                  >
                    How It Works
                  </p>
                </NavLink>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 d-flex flex-column third-column gap-3 footer-column">
                <h3 className="w-100">Useful Links</h3>
                <p className="p-0 m-0">Help Center</p>
                <p className="p-0 m-0">Privacy Policy</p>
                <p className="p-0 m-0">Terms & Condition</p>
                <p className="p-0 m-0">FAQ</p>
                <div className="d-flex flex-column justify-content-end w-100 h-100 p-0 gap-4">
                  <h3 className="w-100 ">Documents</h3>
                  <p className="p-0 m-0 text-decoration-underline">
                    Linked Here
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex flex-column forth-column gap-3 footer-column">
                <h3 className="w-100">Contact Us</h3>
                <div className="item d-flex gap-3 ">
                  <div className="img-div d-flex flex-column">
                    <img
                      src="/Images/footer/location.png"
                      alt="location"
                      className="contact-img"
                      style={{ width: "23px", height: "23px" }}
                    />
                  </div>
                  <p className="m-0 contact-info">
                    Leo dui fermentum tristique urna tellus eget amet aliquam.
                    Id vitae orci
                  </p>
                </div>
                <div className="item d-flex gap-3 ">
                  <div className="img-div d-flex flex-column">
                    <img
                      src="/Images/footer/mail.png"
                      alt="mail"
                      className="contact-img"
                      style={{ height: "15.81px" }}
                    />
                  </div>
                  <div className="d-flex flex-column gap-1 ">
                    <p className="m-0 contact-info">email@email.com</p>
                    <p className="m-0 contact-info">support@email.com</p>
                  </div>
                </div>
                <div className="item d-flex gap-3 ">
                  <div className="img-div d-flex flex-column">
                    <img
                      src="/Images/footer/phone.png"
                      alt="phone"
                      className="contact-img"
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                  <p className="m-0 contact-info">+29 98595 8998</p>
                </div>
              </div>
            </div>
            <hr style={{ color: "#ffffff" }} />
            <div className="bottom-footer row">
              <div className="col-6 right-div">
                <p>All Rights Reserved</p>
              </div>
              <div className="col-6 d-flex justify-content-end  left-div gap-4">
                <NavLink to="">
                  <div className="d-flex justify-content-center align-items-center media-div">
                    <i className="fa-brands fa-facebook-f media-icon"></i>
                  </div>
                </NavLink>
                <NavLink to="">
                  <div className="d-flex justify-content-center align-items-center media-div">
                    <i className="fa-brands fa-instagram media-icon"></i>
                  </div>
                </NavLink>
                <NavLink to="">
                  <div className="d-flex justify-content-center align-items-center media-div">
                    <i className="fa-brands fa-twitter media-icon"></i>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Footer);

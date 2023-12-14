import React, { useEffect } from "react";
import { memo } from "react";
import Typical from "react-typical";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

const Hero = () => {
  useEffect(() => {
    sr.reveal(".info", { delay: 200, origin: "bottom" });
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="row m-0 p-0 h-100">
          <div className="col-9 mx-auto p-0">
            <div className="row h-100">
              <div className=" d-flex flex-column justify-content-center align-items-center hero p-0">
                <h1>
                  <Typical
                    steps={["Il tuo", 1000, "Il tuo accesso al sole", 500]}
                    loop={Infinity}
                    wrapper="p"
                    className="hero-heading"
                  />
                </h1>
                <p className="info">
                  Sistemi fotovoltaici intelligenti ad uso residenziale, anche
                  in assenza di tetto. La tua fonte d'energia, gratuita e
                  sostenibile
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Hero);

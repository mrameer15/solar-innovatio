import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const SwipeList = (props) => {
  return (
    <>
      <div className="swipe-list position-relative">
        <Swiper
          slidesPerView={props.slide}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper w-100"
        >
          <SwiperSlide className="swiper">
            <div className="m-0 list-member green">
              <div className="list-card d-flex flex-column align-items-center  gap-3">
                <img
                  src="/Images/connettiti/rechiedi.png"
                  alt="rechiedi"
                  className="card-img"
                />
                <h2>Richiedi un Preventivo</h2>
                <p>
                  Senza impegno un nostro Solar expert ti contatterâ per
                  verificare Ie tue esirenze ditilizzn
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <div className="  m-0 list-member purple">
              <div className="list-card d-flex flex-column align-items-center  gap-3 ">
                <img
                  src="/Images/connettiti/verifica.png"
                  alt="rechiedi"
                  className="card-img"
                />
                <h2>Verifica la compatibilitâ</h2>
                <p>
                  Verifica immediata della necessitâ tecniche di installazione
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <div className="  m-0 list-member black">
              <div className="list-card d-flex flex-column align-items-center  gap-3 ">
                <img
                  src="/Images/connettiti/installazione.png"
                  alt="rechiedi"
                  className="card-img"
                />
                <h2>Installazione</h2>
                <p>
                  Un instalIatore qualificato Solar Innovatio posizionerâ il
                  SIRE in massimo 2 ore
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <div className="  m-0 list-member yellow">
              <div className="list-card d-flex flex-column align-items-center  gap-3 ">
                <img
                  src="/Images/connettiti/sun.png"
                  alt="rechiedi"
                  className="card-img"
                />
                <h2>Enjoy your Sun Power</h2>
                <p>Connettiti alla APP e goditi la tua energia solare</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default memo(SwipeList);

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-reveal";
import "swiper/css";

const Entrepreneurship = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <Fade top>
        <header>
          <h2 className="text-center lg:text-7xl text-4xl font-bold">
            Entrepreneurship
          </h2>
          <p className="text-center text-base font-semibold my-5">
            Founder, Metri Decor LLP
          </p>
        </header>
      </Fade>

      <main>
        <div className="flex justify-center gap-5 lg:flex-nowrap flex-wrap-reverse">
          <div className="lg:w-[48%] w-full card flex flex-col gap-5 justify-center">
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Initiated a startup which aimed at blending glass and stone
                rawness into finished home décor artefacts
              </div>
            </Fade>
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Crafted product range includes book-ends, flower vases, lamps,
                abstract artefacts, bar accessories, tablewares and much more
              </div>
            </Fade>
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Connected with the glass artisans of Firozabad city and marble
                craftsman of Agra city creating a healthy working environment,
                raising employment for people
              </div>
            </Fade>
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Collaborated with various e-commerce websites: etsy , ebay ,
                Walmart , House of things and Amazon for sales
              </div>
            </Fade>

            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Gained recognition in international and national markets for
                glass artistry and marble craftsmanship
              </div>
            </Fade>
          </div>
          <div className="lg:w-[48%] w-full card">
            <Fade top>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/pic1.jpg"
                      alt="pic1"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/pic2.jpg"
                      alt="pic2"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/pic3.png"
                      alt="pic3"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </Fade>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Entrepreneurship;

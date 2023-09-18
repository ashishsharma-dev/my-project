import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Entrepreneurship = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <header>
        <h2 className="text-center text-7xl font-bold">Entrepreneurship</h2>
        <p className="text-center text-base font-semibold my-5">
          Founder, Metri Decor LLP
        </p>
      </header>
      <main>
        <div className="flex justify-center gap-5">
          <div className="w-[48%] card flex flex-col gap-5">
            <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              Initiated a startup which aimed at blending glass and stone
              rawness into finished home décor artefacts
            </div>
            <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              Crafted product range includes book-ends, flower vases, lamps,
              abstract artefacts, bar accessories, tablewares and much more
            </div>
            <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              Connected with the glass artisans of Firozabad city and marble
              craftsman of Agra city creating a healthy working environment,
              raising employment for people
            </div>
            <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              Collaborated with various e-commerce websites: etsy , ebay ,
              Walmart , House of things and Amazon for sales
            </div>
            <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              Gained recognition in international and national markets for glass
              artistry and marble craftsmanship
            </div>
          </div>
          <div className="w-[48%] card">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="imgBox">
                  <img
                    src="https://aadrikagoyal.com/images/section/pic1.jpg"
                    alt="pic1"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgBox">
                  <img
                    src="https://aadrikagoyal.com/images/section/pic2.jpg"
                    alt="pic2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgBox">
                  <img
                    src="https://aadrikagoyal.com/images/section/pic3.png"
                    alt="pic3"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Entrepreneurship;

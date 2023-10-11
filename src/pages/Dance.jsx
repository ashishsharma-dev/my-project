import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-reveal";
import "swiper/css";
import Video1 from "../assets/vid (1).mp4"
import Video2 from "../assets/vid (2).mp4"
import Video3 from "../assets/vid (3).mp4"
import Video4 from "../assets/save plant.mp4"

const Dance = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <Fade top>
        <header>
          <h2 className="text-center lg:text-7xl text-4xl font-bold my-5 mb-10">
            Dance
          </h2>
        </header>
      </Fade>

      <main>
        <div className="flex justify-center gap-5 lg:flex-nowrap flex-wrap-reverse">
          <div className="relative lg:w-[48%] w-full card flex flex-col justify-center gap-5">
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Trained 8 years for Indian classical dance form : Kathak .
                Completed ( name of certificate/ exam taken ), 2023
              </div>
            </Fade>
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Finalist, Dance India Dance ( Final Round of National Fame
                Television Dance Reality Show , held in Mumbai, India ), 2017
              </div>
            </Fade>
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Gold Medalist, UP State Students Olympic Games Inter city
                ,participated as an Indian dance form Kathak on skates
              </div>
            </Fade>
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Volunteer , Contemporary dancer, PEACE IS GREEN initiative by
                Act Now Organization B.
              </div>
            </Fade>
            <button>
              <a
                href="https://aadrikagoyal.com/Extra%20Carricular%20Activity.pdf"
                className="absolute left-0 rounded-sm  px-4 py-2 bg-black text-white inline-block"
              >
                More Activities
              </a>
            </button>
          </div>
          <div className="lg:w-[48%] w-full card mx-auto">
            <Fade top>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="imgBox flex justify-center ">
                    <img
                      src="https://aadrikagoyal.com/images/section/doc1.png"
                      alt="pic1"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/doc2.png"
                      alt="pic2"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/doc3.png"
                      alt="pic3"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/doc4.png"
                      alt="pic3"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/doc5.png"
                      alt="pic3"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/doc6.png"
                      alt="pic3"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/doc3.png"
                      alt="pic3"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </Fade>
          </div>
        </div>


        <Fade top>
        <header className="mt-[4rem]">
          <h2 className="text-center lg:text-7xl text-4xl font-bold my-5 mb-10">
            Dance Videos
          </h2>
        </header>
      </Fade>
        <div className="videoSection mt-4">
            <div className="flex gap-6 flex-wrap justify-center">
                  <div className="box rounded-xl overflow-hidden w-50">
                    <video controls src={Video2}></video>
                  </div>
                  <div className="box rounded-xl overflow-hidden w-50">
                  <video controls src={Video3}></video>
                  </div>
                  <div className="box rounded-xl overflow-hidden w-50">
                  <video width={500} controls src={Video1}></video>
                  </div>
                  <div className="box rounded-xl overflow-hidden w-50">
                  <video width={500} controls src={Video4}></video>
                  </div>
            </div>
        </div>
      </main>


    </div>
  );
};

export default Dance;

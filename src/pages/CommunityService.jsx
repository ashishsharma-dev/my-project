import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-reveal";
import "swiper/css";

const CommunityService = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <Fade top>
        <header>
          <h2 className="text-center lg:text-7xl text-4xl font-bold my-5 mb-10">
            Community Service
          </h2>
        </header>
      </Fade>

      <main>
        <div className="flex justify-center gap-5 lg:flex-nowrap flex-wrap-reverse">
          <div className="relative lg:w-[48%] w-full card flex flex-col justify-center gap-5">
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Founder ,Sewalaya NGO , Agra Chapter
              </div>
            </Fade>
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Introduction of Sewalya
              </div>
            </Fade>
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Developed a curriculum for teachers and leaders of the school .
                An interactive plan was also formulated to provide essential
                concepts for student enhancement.
              </div>
            </Fade>
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Planned a one month Summer Camp for a batch of 60 students for
                support, encouragement and training in Dance, Street Plays,
                Skating , stitching and basic Math and English classes were
                imparted.
              </div>
            </Fade>
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Organised a skate collection drive at school and The Skating
                Club collecting 23 pairs and donating them.
              </div>
            </Fade>
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
                      src="https://aadrikagoyal.com/images/section/image1.jpeg"
                      alt="pic1"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/image2.jpeg"
                      alt="pic2"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/image3.jpeg"
                      alt="pic3"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/image5.jpeg"
                      alt="pic5"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/image6.jpeg"
                      alt="pic6"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/image7.jpeg"
                      alt="pic7"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/image8.jpeg"
                      alt="pic8"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="imgBox flex justify-center">
                    <img
                      src="https://aadrikagoyal.com/images/section/image9.jpeg"
                      alt="pic9"
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

export default CommunityService;

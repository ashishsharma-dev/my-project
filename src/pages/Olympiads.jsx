import React from "react";
import { Fade } from "react-reveal";

const Olympiads = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <Fade top>
        <header>
          <h2 className="text-center lg:text-7xl text-4xl font-bold">
            Olympiads
          </h2>
        </header>
      </Fade>

      <main>
        <div className="flex flex-wrap gap-5 justify-center my-10 ">
          <Fade top>
            <div className="relative card lg:w-[45%] w-full h-[200px] shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">Gold Medalist</h3>
              <p className="text-base mt-3">
                Science Olympiad Foundation (SOF), International English
                Olympiad at School Level, 2022
              </p>
              <button>
                <a
                  href="https://aadrikagoyal.com/pdfs/image1.jpeg"
                  className="absolute bottom-5 left-5 rounded-sm mt-5 px-4 py-2 bg-black text-white inline-block"
                >
                  Know More
                </a>
              </button>
            </div>
          </Fade>

          <Fade top>
            <div className="relative card lg:w-[45%] w-full h-[200px] shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">Merit Student</h3>
              <p className="text-base mt-3">
                Hong Kong International Mathematics Olympiads (HKIMO), 2023
              </p>
              <button>
                <a
                  href="https://aadrikagoyal.com/pdfs/AADRIKA%20GOYAL%20(5).pdf"
                  className="absolute bottom-5 left-5 rounded-sm mt-5 px-4 py-2 bg-black text-white inline-block"
                >
                  Know More
                </a>
              </button>
            </div>
          </Fade>

          <Fade top>
            <div className="relative card lg:w-[45%] w-full h-[200px] shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">Gold Medalist</h3>
              <p className="text-base mt-3">
                Philippine International Math and Science Olympics (PIMSO) Math
                Olympiad, 2023
              </p>
            </div>
          </Fade>

          <Fade top>
            <div className="relative card lg:w-[45%] w-full h-[200px] shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">Participant</h3>
              <p className="text-base mt-3">
                Participant , Science Olympiad Foundation (SOF) International
                Mathematics Olympiad, 2022
              </p>
              <button>
                <a
                  href="https://aadrikagoyal.com/pdfs/image0.jpeg"
                  className="absolute bottom-5 left-5 rounded-sm mt-5 px-4 py-2 bg-black text-white inline-block"
                >
                  Know More
                </a>
              </button>
            </div>
          </Fade>
        </div>
      </main>
    </div>
  );
};

export default Olympiads;

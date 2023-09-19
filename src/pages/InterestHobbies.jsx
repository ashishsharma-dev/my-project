import React from "react";
import Fade from "react-reveal/Fade";
import Cycling from "../assets/cycling.gif";
import Reading from "../assets/reading.gif";
import Writing from "../assets/writing.gif";
import Skating from "../assets/skating.gif";

const InterestHobbies = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <Fade top>
        <header>
          <h2 className="text-center lg:text-7xl text-4xl font-bold">
            Interest & Hobbies
          </h2>
        </header>
      </Fade>
      <main>
        <div className="flex flex-wrap gap-5 justify-center my-10 mt-20">
          <Fade top>
            <div className="card lg:w-[23%] w-[100%] flex justify-center flex-col items-center gap-3 shadow-sm hover:shadow-md cursor-pointer transition-all bg-[white] rounded-sm p-5 ">
              <h3 className="text-2xl font-bold">Reading</h3>
              <img src={Reading} alt="" />
            </div>
          </Fade>

          <Fade top>
            <div className="card lg:w-[23%] w-[100%] flex justify-center flex-col items-center gap-3 shadow-sm hover:shadow-md cursor-pointer transition-all bg-[white] rounded-sm p-5">
              <h3 className="text-2xl font-bold">Skating</h3>
              <img src={Skating} alt="" />
            </div>
          </Fade>
          <Fade top>
            <div className="card lg:w-[23%] w-[100%] flex justify-center flex-col items-center gap-3 shadow-sm hover:shadow-md cursor-pointer transition-all bg-[white] rounded-sm p-5">
              <h3 className="text-2xl font-bold">Cycling</h3>
              <img src={Cycling} alt="" />
            </div>
          </Fade>
          <Fade top>
            <div className="card lg:w-[23%] w-[100%] flex justify-center flex-col items-center gap-3 shadow-sm hover:shadow-md cursor-pointer transition-all bg-[white] rounded-sm p-5">
              <h3 className="text-2xl font-bold">Writing</h3>
              <img src={Writing} alt="" />
            </div>
          </Fade>
        </div>
      </main>
    </div>
  );
};

export default InterestHobbies;

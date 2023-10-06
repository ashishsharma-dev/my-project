import React from "react";
import { Fade } from "react-reveal";

const AcademicHonours = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <Fade top>
        <header>
          <h2 className="text-center text-7xl font-bold">Academic Honours</h2>
        </header>
      </Fade>
      <main>
        <div className="flex gap-5 justify-center flex-col my-10">
          <Fade top>
            <div className="card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">2020 - 2024</h3>
              <p className="text-base mt-3">
                Among the Top 5 rankers of the batch of 120 students
                consistently for 4 years
              </p>
            </div>
          </Fade>
          <Fade top>
            <div className="card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">2023-2024</h3>
              <p className="text-base mt-3">
                Secured the highest marks in Grade 12th CBSE in a batch of 44 in
                mid-year trials.
              </p>
            </div>
          </Fade>
          <Fade top>
            <div className="card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">2022-2023</h3>
              <p className="text-base mt-3">
                Secured the highest grade in Grade 11th CBSE in a batch of 30 in
                Applied Math.
              </p>
            </div>
          </Fade>
          <Fade top>
            <div className="card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">2021-2022</h3>
              <p className="text-base mt-3">
                National Topper in History & Civics (100/100) under Group 1 in
                Grade 10th ICSE
              </p>
            </div>
          </Fade>
          <Fade top>
            <div className="card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">2020-2021</h3>
              <p className="text-base mt-3">
                Top 3 rank holder of the batch of 20 in Grade 9th ICSE.
              </p>
            </div>
          </Fade>

          
          <Fade top>
            <div className="card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">2017</h3>
              <p className="text-base mt-3">
                Title Holder, The Golden Book of World Records - for ceaseless
                1850 kathak spins.
              </p>
            </div>
          </Fade>

          <Fade top>
            <div className="card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">2016</h3>
              <p className="text-base mt-3">
                World Record Title Holder , A Golden Book of World Records - for
                dancing continuously on skates for 105 minutes (1 hr 45 min)
              </p>
            </div>
          </Fade>
        </div>
      </main>
    </div>
  );
};

export default AcademicHonours;

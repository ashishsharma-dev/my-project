import React from "react";
import { Fade } from "react-reveal";

const OnlineCourse = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <Fade top>
        <header>
          <h2 className="text-center lg:text-7xl text-4xl font-bold">
            Online Courses
          </h2>
        </header>
      </Fade>

      <main>
        <div className="flex gap-5 justify-center flex-col my-10">
          <Fade top>
            <div className="relative card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                Brand Management: Aligning Business, Brand and Behaviour
              </h3>
              <p className="text-base mt-3">
                Completed, “Brand Management: Aligning Business, Brand and
                Behaviour”, online course by University of London on Coursera.
              </p>
              <button>
                <a
                  href="https://aadrikagoyal.com/images/courses/Brand%20management%20certificate.jpeg"
                  className="mt-3 inline-block font-bold text-blue-700"
                >
                  Know More
                </a>
              </button>
            </div>
          </Fade>
          <Fade top>
            <div className="relative card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                Platform Thinking: Designing a platform
              </h3>
              <p className="text-base mt-3">
                An online non-credit course authorized by Politecnico di Milano
                and offered through Coursera
              </p>
              <button>
                <a
                  href="https://aadrikagoyal.com/images/courses/platform%20building%20certificate.jpeg"
                  className="mt-3 inline-block font-bold text-blue-700"
                >
                  Know More
                </a>
              </button>
            </div>
          </Fade>
          <Fade top>
            <div className="relative card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                The Politics and Economics of International Trade in 21st
                Century
              </h3>
              <p className="text-base mt-3">
                Attended live lectures of 30 hours and completed a course on “
                The Politics and Economics of International Trade in 21st
                Century.
              </p>
              <button>
                <a
                  href="https://aadrikagoyal.com/images/courses/Aadrika%20Goyal.png"
                  className="mt-3 inline-block font-bold text-blue-700"
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

export default OnlineCourse;

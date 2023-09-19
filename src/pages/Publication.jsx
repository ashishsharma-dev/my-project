import React from "react";
import { Fade } from "react-reveal";

const Publication = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <Fade top>
        <header>
          <h2 className="text-center lg:text-7xl text-4xl font-bold">
            Publication
          </h2>
        </header>
      </Fade>
      <main>
        <div className="flex gap-5 justify-center flex-col my-10">
          <Fade top>
            <div className="relative card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                The Punjab National Bank Scam
              </h3>
              <p className="text-base mt-3">
                Published an intricate study of, “The Punjab National Bank scam”
                2023 (Vanijya - School magazine)
              </p>
              <button>
                <a
                  href="https://aadrikagoyal.com/pdfs/SCAM%20STUDY.pdf"
                  className="absolute lg:top-[50%] -bottom-3 lg:right-5 left-5 -translate-y-1/2 rounded-sm  lg:px-4 px-2 lg:py-2 py-1 bg-black text-white inline-block"
                >
                  Know More
                </a>
              </button>
            </div>
          </Fade>
          <Fade top>
            <div className="relative card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                The growth journey of a small business to a large enterprise
              </h3>
              <p className="text-base mt-3">
                Submitted an article on, “ The growth journey of a small
                business to a large enterprise “ with an analysis of national
                and international sales.
              </p>
              <button>
                <a
                  href="https://aadrikagoyal.com/pdfs/START%20UP%20INDIA.pdf"
                  className="absolute lg:top-[50%] -bottom-3 lg:right-5 left-5 -translate-y-1/2 rounded-sm  lg:px-4 px-2 lg:py-2 py-1 bg-black text-white inline-block"
                >
                  Know More
                </a>
              </button>
            </div>
          </Fade>
          <Fade top>
            <div className="relative card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                The Temple Economy of India
              </h3>
              <p className="text-base mt-3">
                Created and published a few interesting and brain teasing
                crossword puzzles for school magazine.
              </p>
              <button>
                <a
                  href="https://aadrikagoyal.com/pdfs/The%20Temple%20Economy%20of%20India.pdf"
                  className="absolute lg:top-[50%] -bottom-3 lg:right-5 left-5 -translate-y-1/2 rounded-sm  lg:px-4 px-2 lg:py-2 py-1 bg-black text-white inline-block"
                >
                  Know More
                </a>
              </button>
            </div>
          </Fade>

          <Fade top>
            <div className="relative card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                Brain Reasing Crossword Puzzles
              </h3>
              <p className="text-base mt-3">
                Created and published a few interesting and brain teasing
                crossword puzzles for school magazine.
              </p>
              <button>
                <a
                  href="https://aadrikagoyal.com/pdfs/worksheet.pdf"
                  className="absolute lg:top-[50%] -bottom-3 lg:right-5 left-5 -translate-y-1/2 rounded-sm  lg:px-4 px-2 lg:py-2 py-1 bg-black text-white inline-block"
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

export default Publication;

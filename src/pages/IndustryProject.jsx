import React from "react";
import { Fade } from "react-reveal";

const IndustryProject = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <Fade top>
        <header>
          <h2 className="text-center lg:text-7xl text-4xl font-bold">
            Industry Partnered Projects
          </h2>
          <p className="text-center text-base font-semibold my-5">2023</p>
        </header>
      </Fade>
      <main>
        <div className="flex justify-center gap-5">
          <Fade top cascade>
            <div className="w-100 card flex flex-col gap-5">
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Successfully completed a course in ,” Digital Marketing “with
                Clever Harvey. Designed a social campaign for PUMA (
                Multinational corporation in sportswear) which was pitched to
                PUMA for their marketing.
              </div>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Acquired knowledge about brand positioning, customer
                segmentation, building social media strategies, digital channels
                and goals and success metrics.
              </div>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                <a
                  className="hover:text-blue-600 transition-all duration-200 font-semibold"
                  href="https://aadrikagoyal.com/Multiply%20ventures%201.pptx"
                >
                  Completed a Junior MBA Entrepreneurship Course with 2023
                  Multiply Ventures (a venture capital fund company started by
                  ex-founders of Myntra, Paytm and Alibaba)
                </a>
              </div>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Successfully completed a course in ,” Digital Marketing “with
                Clever Harvey. Designed a social campaign for PUMA (
                Multinational corporation in sportswear) which was pitched to
                PUMA for their marketing.
              </div>
            </div>
          </Fade>
        </div>
      </main>
    </div>
  );
};

export default IndustryProject;

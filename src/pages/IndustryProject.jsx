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
        <div className="flex justify-center gap-5 flex-col">
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
          <header>
            <h2 className="text-center lg:text-7xl text-4xl font-bold my-4">
              Certificates
            </h2>
          </header>
          <div className="w-100 card flex gap-5">
            <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                Business Plan Challenge with E-Cell IIT Roorkee
              </h3>
              <p className="text-base mt-3">
                Certificate of participation in the Business Plan Challenge with
                E-Cell IIT Roorkee
              </p>
              <button>
                <a
                  className="px-4 py-2 mt-4 inline-block bg-black text-white"
                  href="#"
                >
                  Know More
                </a>
              </button>
            </div>
            <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                JuniorMBA in Digital Marketing with a company project by Puma
              </h3>
              <p className="text-base mt-3">
                Certificate of achievement in Digital Marketing with a company
                project by PUMA
              </p>
              <button>
                <a
                  className="px-4 py-2 mt-4 inline-block bg-black text-white"
                  href="#"
                >
                  Know More
                </a>
              </button>
            </div>
            <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                JuniorMBA in Entrepreneurship company project by Multiply
                Ventures
              </h3>
              <p className="text-base mt-3">
                Certificate of achievement in Entrepreneurship with a company
                project by Multiply Ventures
              </p>
              <button>
                <a
                  className="px-4 py-2 mt-4 inline-block bg-black text-white"
                  href="#"
                >
                  Know More
                </a>
              </button>
            </div>
            <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                Case Study: Entrepreneurship with a company project by Multiply
                Ventures
              </h3>
              <button>
                <a
                  className="px-4 py-2 mt-4 inline-block bg-black text-white"
                  href="#"
                >
                  Know More
                </a>
              </button>
            </div>
            <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                Digital Marketing with a company project by PUMA
              </h3>
              <button>
                <a
                  className="px-4 py-2 mt-4 inline-block bg-black text-white"
                  href="#"
                >
                  Know More
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndustryProject;

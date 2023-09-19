import React from "react";
import Fade from "react-reveal/Fade";

const MarketReport = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <Fade top>
        <header>
          <h2 className="text-center lg:text-7xl text-4xl font-bold">
            Market Feasibility Report
          </h2>
          <p className="text-center text-base font-semibold my-5">
            19th Dec 2022 - 14th Jan 2023
          </p>
        </header>
      </Fade>

      <main>
        <div className="flex justify-center gap-5 lg:flex-nowrap flex-wrap-reverse">
          <div className="lg:w-[48%] w-full card flex flex-col gap-5">
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Worked for 4 weeks under the able guidance of Chartered
                Accountant Mr. Sumit Jain , Gyan Chand Jain and Company ,
                documenting a Market Feasibility Report for Metri Decor LLP
              </div>
            </Fade>

            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Focused on studying the existing and feasible market for home
                decor products both nationally and internationally
              </div>
            </Fade>

            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Detailed study was done to bring about the share of glass and
                marble respectively in this market
              </div>
            </Fade>
            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Identified the problems faced by the glass and marble products’
                manufacturers
              </div>
            </Fade>

            <Fade top>
              <div className="inner-card shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
                Explored various market gaps which could be used as an
                instrument to enhance the share of these products in the market
              </div>
            </Fade>
          </div>
          <div className="lg:w-[48%] w-full card lg:h-auto h-96">
            <Fade>
              <iframe
                width="100%"
                height="100%"
                class="nKphmK"
                title="PDF Viewer"
                aria-label="PDF Viewer"
                scrolling="no"
                src="https://aadrikagoyal.com/pdfs/metri decor report.pdf"
                allowfullscreen=""
                allowtransparency="true"
                allowvr="true"
                frameborder="0"
                allow="autoplay;camera;microphone;geolocation;vr"
              ></iframe>
            </Fade>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketReport;

import React from "react";
import Fade from "react-reveal/Fade";

const OtherEndeavors = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <Fade top>
        <header>
          <h2 className="text-center lg:text-7xl text-4xl font-bold">
            Other Endeavors
          </h2>
        </header>
      </Fade>
      <main>
        <div className="flex flex-wrap gap-5 justify-center my-10">
          <Fade top>
            <div className="card w-100  shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">Research</h3>
              <p className="text-base mt-3">
                Wrote an article on, "
                <a
                  className="text-blue-600 font-semibold"
                  href="https://aadrikagoyal.com/pdfs/RISE%20OF%20NEOLIBERALISM.pdf"
                >
                  Rise of Neoliberalism: A Class Ideology
                </a>
                " under Professor Dr. Ambreen Agha and submitted it in the
                Department of Economics, at OP Jindal University, India
              </p>
            </div>
          </Fade>

          <Fade top>
            <div className="card w-[100%]  shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">Leadership</h3>
              <p className="text-base mt-3">
                Delegate of the Model United Nations (MUN) for the All India
                Political Parties Meet (AIPPM)
              </p>
            </div>
          </Fade>
          <Fade top>
            <div className="card w-[100%]  shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">Internship</h3>
              <p className="text-base mt-3">23rd May - 18th June</p>
            </div>
          </Fade>
        </div>
      </main>
    </div>
  );
};

export default OtherEndeavors;

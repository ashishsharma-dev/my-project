import React from "react";

const Education = () => {
  return (
    <>
      <div className="mainContent mt-[4rem]">
        <header>
          <h2 className="text-center text-7xl font-bold">Education</h2>
        </header>
        <main>
          <div className="flex flex-wrap gap-5 justify-center my-10">
            <div className="card w-[45%] h-[200px] shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                Delhi Public School, Agra , India 2024
              </h3>
              <p className="text-base mt-3">
                Will appear for Central Board of Secondary Education (CBSE)
                Examination at the end of Grade 12 - 2024.
              </p>
            </div>
            <div className="card w-[45%] h-[200px] shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                St. Patrick’s Junior High School 2022
              </h3>
              <p className="text-base mt-3">
                Will appear for Central Board of Secondary Education (CBSE)
                Examination at the end of Grade 12 - 2024.
              </p>
            </div>
            <div className="card w-[45%] h-[200px] shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                Standardised Tests: SAT Reasoning Test
              </h3>
              <p className="text-base mt-3">
                Test Scores: 1450/1600 ( E - 710; M - 740 )
              </p>
            </div>

            <div className="card w-[45%] h-[200px] shadow-sm hover:shadow-md cursor-pointer transition-all bg-slate-100 rounded-sm p-5">
              <h3 className="text-2xl font-bold">
                Standardised Tests: IELTS Academia
              </h3>
              <p className="text-base mt-3">
                Test Scores: ( R - 8.5; W - 7.0; L - 8.5; S -7.5; )
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Education;

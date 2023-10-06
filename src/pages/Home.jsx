import React from "react";
import { Fade } from "react-reveal";

const Home = () => {
  return (
    <div className="mainContent mt-[4rem]">
      <Fade>
        <header>
          <Fade cascade>
            <h1 className="text-center lg:text-7xl text-4xl font-bold">
              I am Aadrika
            </h1>
          </Fade>
          <img
            className="w-[200px] h-[200px] mx-auto mt-10 mb-5 rounded-[50%]"
            src="https://aadrikagoyal.com/images/section/aadrika.jpg"
            alt=""
          />
        </header>
      </Fade>
      <main className="">
        <Fade top>
          <p className="text-[25px] mb-6 leading-[30px] tracking-[0px] font-bold">
            Hello!
          </p>
        </Fade>
        <Fade top>
          <p className="text-[25px] mb-6 leading-[30px] tracking-[0px] font-light">
            A talented and driven 12th grader student with an impressive array
            of interests and accomplishments. From the world of dance to
            publications, research, community service, and entrepreneurial
            endeavors, my journey is nothing short of extraordinary.
          </p>
        </Fade>
        <Fade top>
          <p className="text-[25px] mb-6 leading-[30px] tracking-[0px] font-light">
            Aadrika Goyal, a talented and driven 12th grader student with an
            impressive array of interests and accomplishments. From the world of
            dance to publications, research, community service, and
            entrepreneurial endeavors, Aadrika’s journey is nothing short of
            extraordinary.
          </p>
        </Fade>

        <Fade top>
          <p className="text-[25px] mb-6 leading-[30px] tracking-[0px] font-light">
            Join Aadrika on her journey as she continues to make waves in
            various fields, leaving a mark wherever her endeavors take her.
            Prepare to be inspired by this young go-getter who embodies the
            perfect blend of ambition and genuine warmth.
          </p>
        </Fade>
      </main>
    </div>
  );
};

export default Home;

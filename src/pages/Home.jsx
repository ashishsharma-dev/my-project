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
          I am Aadrika Goyal, a highly motivated and accomplished 12th-grade student, characterized by a diverse range of passions and notable achievements. My journey through education has been marked by a relentless pursuit of excellence across a myriad of disciplines. 

          </p>
        </Fade>
        <Fade top>
          <p className="text-[25px] mb-6 leading-[30px] tracking-[0px] font-light">
          In the realm of dance, I've demonstrated exceptional talent and dedication, mastering various forms and leaving audiences mesmerized with my performances. This artistic pursuit reflects my commitment to self-expression and creativity.

          </p>
        </Fade>

        <Fade top>
          <p className="text-[25px] mb-6 leading-[30px] tracking-[0px] font-light">
          Furthermore, my academic journey has been equally impressive. I've ventured into publications and research, showcasing my intellectual curiosity and thirst for knowledge. This pursuit has not only broadened my horizons but also allowed me to contribute to the advancement of knowledge in my areas of interest.

          </p>
        </Fade>
        <Fade top>
          <p className="text-[25px] mb-6 leading-[30px] tracking-[0px] font-light">
          Committed to making a positive impact on my community, I've actively engaged in various community service initiatives. My dedication to giving back has been instrumental in shaping my character and fostering a sense of responsibility towards society.
          </p>
        </Fade>

        <Fade top>
          <p className="text-[25px] mb-6 leading-[30px] tracking-[0px] font-light">
          Notably, I've also ventured into entrepreneurial endeavors, demonstrating my ability to think innovatively and create opportunities. These experiences have instilled in me an entrepreneurial spirit that fuels my desire to make a mark in the business world.
          </p>
        </Fade>

        <Fade top>
          <p className="text-[25px] mb-6 leading-[30px] tracking-[0px] font-light">
          As I continue on my journey, I invite you to join me in witnessing the waves I make across these diverse fields. Together, we'll explore the realms of art, academia, community service, and entrepreneurship, as I leave a lasting impression wherever my endeavors take me.         
           </p>
        </Fade>
      </main>
    </div>
  );
};

export default Home;

import "./App.css";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Entrepreneurship from "./pages/Entrepreneurship";
import AcademicHonours from "./pages/AcademicHonours";
import MarketReport from "./pages/MarketReport";
import IndustryProject from "./pages/IndustryProject";
import Olympiads from "./pages/Olympiads";
import OnlineCourse from "./pages/OnlineCourse";
import Publication from "./pages/Publication";
import Dance from "./pages/Dance";
import CommunityService from "./pages/CommunityService";
import OtherEndeavors from "./pages/OtherEndeavors";
import InterestHobbies from "./pages/InterestHobbies";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <div className="container w-[1200px] mx-auto">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/education" element={<Education />} />
            <Route
              exact
              path="/academic-honours"
              element={<AcademicHonours />}
            />
            <Route
              exact
              path="/entrepreneurship"
              element={<Entrepreneurship />}
            />
            <Route exact path="/market-report" element={<MarketReport />} />
            <Route
              exact
              path="/industry-project"
              element={<IndustryProject />}
            />
            <Route exact path="/olympiads" element={<Olympiads />} />
            <Route exact path="/online-course" element={<OnlineCourse />} />
            <Route exact path="/publication" element={<Publication />} />
            <Route exact path="/dance" element={<Dance />} />
            <Route
              exact
              path="/community-service"
              element={<CommunityService />}
            />
            <Route exact path="/other-endeavors" element={<OtherEndeavors />} />
            <Route
              exact
              path="/interest-hobbies"
              element={<InterestHobbies />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;

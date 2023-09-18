import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container my-5 ">
      <header>
        <h2 className="text-center text-4xl font-semibold">Aadrika Goyal</h2>
      </header>
      <div className="w-[80vw] h-[1px] mt-5 bg-black  mx-auto"></div>
      <nav>
        <ul className="flex justify-center gap-x-5 gap-y-2 flex-wrap mt-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/education"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/academic-honours"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Academic Honours
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/entrepreneurship"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Entrepreneurship
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/market-report"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Market Report
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/industry-project"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Industry Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/olympiads"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Olympiads
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/online-course"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Online Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/publication"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Publication
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dance"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Dance
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community-service"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Community Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/other-endeavors"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Other Endeavors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/interest-hobbies"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Interest & Hobbies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import icon from "../assets/A.png";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container my-5 ">
      <header>
        <h2 className="text-center text-4xl lg:block hidden font-semibold">
          Aadrika Goyal
        </h2>
      </header>

      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 ">
          <img
            onClick={() => navigate("/")}
            src={icon}
            className="w-100 h-10 mr-2 lg:hidden block"
            alt="Logo"
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <ul className="flex lg:justify-center justify-normal gap-x-5 gap-y-2 flex-wrap mt-5">
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
          </div>
        </div>
      </nav>
      <div className="w-[80vw] h-[1px] bg-black  mx-auto"></div>
    </div>
  );
};

export default Header;

import React from "react";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-100 text-center lg:p-[5rem] p-[2rem]">
      <div className="socials flex justify-center">
        <span className="px-2">
          <a
            href="mailto:aadrikagoyal2006@gmail.com"
            className="hover:text-slate-500 transition-all"
          >
            <FaEnvelope size="50px" />
          </a>
        </span>
      </div>
      <div className="copyright lg:mt-10 mt-5 lg:text-base text-xs lg:font-semibold font-normal ">
        &copy; Copyright 2023 All Rights Reserved{" "}
      </div>
    </div>
  );
};

export default Footer;

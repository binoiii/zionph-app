import React from "react";
import { Link } from "react-scroll";
import { IoIosArrowDropup } from "react-icons/io";

const BackTop = () => {
  return (
    <Link to="header" smooth duration={500}>
      <IoIosArrowDropup className="back-to-top" />
    </Link>
  );
};

export default BackTop;

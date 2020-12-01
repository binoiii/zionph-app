import React from "react";
import { IconContext } from "react-icons";
import { MdNavigateNext } from "react-icons/md";

const PrevNextIcon = ({ iconClass }) => (
  <IconContext.Provider value={{ className: iconClass, size: "2.5rem" }}>
    <MdNavigateNext />
  </IconContext.Provider>
);

export default PrevNextIcon;

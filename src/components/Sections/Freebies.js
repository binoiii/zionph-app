import React from "react";

import { Row } from "react-bootstrap";
import { MdTouchApp } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { GiAutoRepair } from "react-icons/gi";

import Fade from "react-reveal/Fade";

const Freebies = () => {
  const freebies = [
    {
      icon: <MdTouchApp className="mb-2 mr-2 text-gold" />,
      freebie: (
        <>
          <span className="text-gold font-weight-heavy">FREE</span> DEMO
          <span className="text-xs"> (Upon Delivery)</span>
        </>
      ),
    },
    {
      icon: <FaTruck className="mb-1 mr-3 text-gold" />,
      freebie: (
        <>
          <span className="text-gold font-weight-heavy">FREE</span> Delivery
          Nationwide
        </>
      ),
    },
    {
      icon: <GiAutoRepair className="text-gold mb-1 mr-2" />,
      freebie: (
        <>
          <span className="text-gold font-weight-heavy">FREE</span> Parts &amp;
          Services
          <span className="text-xs"> (Upon Warranty)</span>
        </>
      ),
    },
    {
      icon: <SiCashapp className="text-gold mb-1 mr-2" />,
      freebie: "COD Nationwide",
    },
  ];

  return (
    <Fade left duration={1000} delay={550} distance="30px">
      <Row className="mt-5 pt-5 d-flex flex-column justify-content-center align-items-center">
        <Row>
          <h1>
            <span className="text-gold">zion</span>freebies
          </h1>
        </Row>
        <Row className="mt-2 pt-2 d-flex flex-column justify-center-center align-items-center">
          {freebies.map(({ icon, freebie }, i) => (
            <Row key={i}>
              <p className="text-md">
                {icon}
                {freebie}
              </p>
            </Row>
          ))}
        </Row>
      </Row>
    </Fade>
  );
};

export default Freebies;

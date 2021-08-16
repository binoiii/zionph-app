import React from "react";
import { IconContext } from "react-icons";
import { Col, Row } from "react-bootstrap";

import { GoLocation } from "react-icons/go";
import { FiGlobe, FiPhone } from "react-icons/fi";
import { FaWaze } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const ContactDetails = () => (
  <section className="contact mt-5 text-center">
    <IconContext.Provider value={{ className: "contact-icons" }}>
      <Row>
        <Col>
          <h4>
            <FaWaze />
            Waze Pin
          </h4>
          <p>KPCMLC Zion Philippines</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            <FiPhone />
            Contact Number
          </h4>
          <p>+63 975 859 5829</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            <AiOutlineMail />
            Email
          </h4>
          <p>zionph1020@gmail.com</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            <FiGlobe />
            Website
          </h4>
          <p>www.zion-ph.com</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            <GoLocation />
            Main Office
          </h4>
          <p className="mb-0">
            Unit 1-G Arca Strp Commercial Center, McArthur Highway, corner
            <br />
            Action Drive Balubaran, Dalandanan, Valenzuela City, 1443
          </p>
        </Col>
      </Row>
    </IconContext.Provider>
  </section>
);

export default ContactDetails;

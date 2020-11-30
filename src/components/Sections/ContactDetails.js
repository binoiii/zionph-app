import React from "react";
import { IconContext } from "react-icons";
import { Col, Row } from "react-bootstrap";

import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { BsClock } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ContactDetails = () => (
  <section className="contact mt-5 text-center">
    <IconContext.Provider value={{ className: "contact-icons" }}>
      <Row>
        <Col>
          <h4>
            <GoLocation />
            Main Office
          </h4>
          <p>2401 Taft Ave, Malate, Manila, 1004 Metro Manila</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            <FiPhone />
            Phone
          </h4>
          <p>Main Office: (02) 8888 8888</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            <BsClock />
            Opening Hours
          </h4>
          <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            <AiOutlineMail />
            Email
          </h4>
          <p className="mb-0">dummy-email@gmail.com</p>
        </Col>
      </Row>
    </IconContext.Provider>
  </section>
);

export default ContactDetails;

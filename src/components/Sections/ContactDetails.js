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
      {/* <Row>
        <Col>
          <h4>
            <GoLocation />
            Main Office
          </h4>
          <p>
            Blk 5 Lot 3 Chinaberry St. ITC Woodlands, Malanday Valenzuela City
            1444
          </p>
        </Col>
      </Row> */}
      <Row>
        <Col>
          <h4>
            <FiPhone />
            Phone
          </h4>
          <p>Main Office: (+63) 9178948913</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            <BsClock />
            Opening Hours
          </h4>
          <p>Monday to Friday: 8:00 AM - 5:00 PM</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            <AiOutlineMail />
            Email
          </h4>
          <p className="mb-0">zionph1020@gmail.com</p>
        </Col>
      </Row>
    </IconContext.Provider>
  </section>
);

export default ContactDetails;

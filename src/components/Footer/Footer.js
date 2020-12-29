import React from "react";

import { Container, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => (
  <Container className="mt-5" fluid="md">
    <footer className="footer d-flex flex-column align-items-center">
      <Row>
        <h4 className="my-4 font-primary text-gold text-sm font-weight-medium letter-space-sm">
          Follow Us
        </h4>
      </Row>
      <Row className="pb-4">
        <IconContext.Provider value={{ classname: "social-links" }}>
          <a
            href="https://www.facebook.com/zionphilippines2020"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="facebook"
            className="social-links"
          >
            <FiFacebook />
          </a>
          <a
            href="https://www.instagram.com/zion_philippines"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="instagram"
            className="social-links"
          >
            <FiInstagram />
          </a>
          {/* <a
            href="www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="twitter"
            className="social-links"
          >
            <FiTwitter />
          </a> */}
        </IconContext.Provider>
      </Row>
      <hr />
      <Row className="pt-4 mb-4 text-gold text-xs font-weight-thin letter-space-xs">
        ©ZionPhilippines, All rights reserved.
      </Row>
    </footer>
  </Container>
);

export default Footer;

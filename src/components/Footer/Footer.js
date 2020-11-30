import React from "react";
import { Container, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => (
  <Container fluid="md">
    <footer className="footer mt-5 d-flex flex-column align-items-center">
      <Row>
        <h4 className="my-4 font-primary text-gold text-sm font-weight-medium letter-space-sm">
          Follow Us
        </h4>
      </Row>
      <Row className="pb-4">
        <IconContext.Provider value={{ classname: "social-links" }}>
          <a
            href="www.fb.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="facebook"
            className="social-links"
          >
            <FiFacebook />
          </a>
          <a
            href="www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="instagram"
            className="social-links"
          >
            <FiInstagram />
          </a>
          <a
            href="www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="twitter"
            className="social-links"
          >
            <FiTwitter />
          </a>
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

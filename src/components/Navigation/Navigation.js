import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Container, Navbar, Nav, NavItem } from "react-bootstrap";

import ImageLogo from "../Images/ImageLogo";

const Navigation = ({ siteTitle }) => (
  <header>
    <Container fluid="md">
      <Navbar
        bg="secondary"
        variant="light"
        expand="md"
        sticky="top"
        className="px-0 py-2"
      >
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <ImageLogo alt={siteTitle} />
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavItem>
              <Nav.Link as={Link} activeClassName="active" to="/">
                Home
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} activeClassName="active" to="/about">
                About
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} activeClassName="active" to="/faq">
                Faq
              </Nav.Link>
            </NavItem>
            <NavItem className="mr-0">
              <Nav.Link
                className="pr-0"
                as={Link}
                activeClassName="active"
                to="/contact"
              >
                Contact
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
);

Navigation.propTypes = {
  siteTitle: PropTypes.string,
};

Navigation.defaultProps = {
  siteTitle: ``,
};

export default Navigation;

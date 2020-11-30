import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link as LinkScroll } from "react-scroll";

import ImageMainHeading from "../Images/ImageMainHeading";
import ImageSubHeading from "../Images/ImageSubHeading";

export const MainHeading = () => {
  return (
    <section>
      <ImageMainHeading>
        <Row
          className="p-3"
          style={{
            height: "100%",
          }}
        >
          <Col
            className="d-flex flex-column p-5 justify-content-center align-items-center "
            style={{
              height: "100%",
            }}
          >
            <h1
              className="company-slogan my-0 mb-2 text-center text-lg text-white letter-space-xs"
              style={{ textTransform: "none" }}
            >
              Everybody's soothing haven
            </h1>
            <p className="company-description my-0 mb-4 text-center text-white">
              Bringing you the most affordable, yet highest quality massage
              chairs and furnitures in the market
            </p>
            <Button variant="outline-light">
              <LinkScroll to="products" smooth duration={500}>
                Shop Now
              </LinkScroll>
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </ImageMainHeading>
      <ImageSubHeading />
    </section>
  );
};

export default MainHeading;

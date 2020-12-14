import React from "react";
import Fade from "react-reveal/Fade";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "gatsby";
import { Link as ScrollLink } from "react-scroll";

import ImageMainHeading from "../Images/ImageMainHeading";
import ImageSubHeading from "../Images/ImageSubHeading";

import useSiteMetaData from "../useSiteMetaData";

export const MainHeading = () => {
  const { description, sub_description } = useSiteMetaData();
  return (
    <Fade top duration={2000} delay={500}>
      <section>
        <ImageMainHeading>
          <Row
            className="p-3"
            style={{
              height: "100%",
            }}
          >
            <Col
              sm={12}
              md={6}
              className="d-flex flex-column p-5 justify-content-center align-items-center "
              style={{
                height: "100%",
              }}
            >
              <h1
                className="company-slogan my-0 mb-2 text-center text-lg text-white letter-space-xs"
                style={{ textTransform: "none" }}
              >
                {description}
              </h1>
              <p className="company-description my-0 mb-4 text-center text-white">
                {sub_description}
              </p>
              <Link to="benefits" duration={500}>
                <Button variant="outline-light">See Health Benefits</Button>
              </Link>
              <ScrollLink to="products" smooth duration={500} className="mt-3">
                <Button variant="primary" className="animate">
                  Shop Now
                </Button>
              </ScrollLink>
            </Col>
          </Row>
        </ImageMainHeading>
        <ImageSubHeading />
      </section>
    </Fade>
  );
};

export default MainHeading;

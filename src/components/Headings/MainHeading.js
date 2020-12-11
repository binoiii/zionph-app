import React from "react";
import Fade from "react-reveal/Fade";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-scroll";

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
              <Link to="products" smooth duration={500}>
                <Button variant="primary">Shop Now</Button>
              </Link>
            </Col>
          </Row>
        </ImageMainHeading>
        <ImageSubHeading />
      </section>
    </Fade>
  );
};

export default MainHeading;

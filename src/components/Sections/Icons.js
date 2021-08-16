import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Icons = () => {
  const data = useStaticQuery(graphql`
    query {
      iconImagePlaceholder: allFile(
        filter: { relativeDirectory: { eq: "awards" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `);

  const images = data.iconImagePlaceholder.edges;

  return (
    <Fade left duration={1000} delay={550} distance="30px">
      <Row className="justify-content-center">
        {images &&
          images.map((imagePlaceholder, i) => {
            const { fluid } = imagePlaceholder.node.childImageSharp;
            const { name } = imagePlaceholder.node;

            const awards = [
              "Awarded as Best After Sales Service",
              "Awarded as Affordable yet High Quality Massage Chair",
            ];

            return (
              <Col
                key={name}
                xs={12}
                sm={4}
                md={3}
                className="px-5 px-sm-3 px-md-4"
              >
                <Img alt={name} fluid={fluid} />
                <p className="text-center text-xs font-weight-heavy">
                  {awards[i]}
                </p>
              </Col>
            );
          })}
      </Row>
    </Fade>
  );
};

export default Icons;

import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Awards = () => {
  const data = useStaticQuery(graphql`
    query {
      iconImagePlaceholder: allFile(
        filter: { relativeDirectory: { eq: "icons" } }
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
      <section className="mt-5 py-5">
        <Row className="justify-content-center">
          {images &&
            images.map(imagePlaceholder => {
              const { fluid } = imagePlaceholder.node.childImageSharp;
              const { name } = imagePlaceholder.node;
              return (
                <Col
                  key={name}
                  xs={12}
                  sm={4}
                  md={3}
                  className="px-5 px-sm-3 px-md-4"
                >
                  <Img alt={name} fluid={fluid} />
                </Col>
              );
            })}
        </Row>
      </section>
    </Fade>
  );
};

export default Awards;

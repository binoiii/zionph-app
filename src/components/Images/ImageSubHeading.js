import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Row, Col } from "react-bootstrap";

const ImageSubHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "subheader" } }) {
        edges {
          node {
            relativeDirectory
            childImageSharp {
              fluid(maxWidth: 540, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            base
          }
        }
      }
    }
  `);

  const [subImageOne, subImageTwo] = data.allFile.edges;

  return (
    <Row className="subheading m-0 text-white text-center">
      <Col sm={12} md={6} className="px-0 mt-2">
        <BackgroundImage
          className="subheading-desc-cont mr-md-1"
          fluid={subImageOne.node.childImageSharp.fluid}
          alt={subImageOne.node.base.split(".")[0]}
        >
          <div className="subheading-overlay d-flex">
            <p className="mb-0 text-md font-secondary">Self-care everyday</p>
          </div>
        </BackgroundImage>
      </Col>
      <Col sm={12} md={6} className="px-0 mt-2">
        <BackgroundImage
          className="subheading-desc-cont ml-md-1"
          fluid={subImageTwo.node.childImageSharp.fluid}
          alt={subImageTwo.node.base.split(".")[0]}
        >
          <div className="subheading-overlay d-flex">
            <p className="mb-0 text-md font-secondary">
              Relax your body and mind
            </p>
          </div>
        </BackgroundImage>
      </Col>
    </Row>
  );
};

export default ImageSubHeader;

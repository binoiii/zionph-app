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
    <Row className="subheading m-0 pb-5 text-center">
      <Col sm={12} md={6} className="px-0 mt-4 subheading-cont ">
        <BackgroundImage
          className="subheading-desc-cont mr-md-3"
          fluid={subImageTwo.node.childImageSharp.fluid}
          alt={subImageTwo.node.base.split(".")[0]}
        >
          <div className="subheading-overlay d-flex ">
            <p className="mb-0 text-md font-secondary">
              Relax your body and mind
            </p>
          </div>
        </BackgroundImage>
        <div className="subheading-content mr-md-3">
          <p className="px-5 py-2 text-gold">
            Are you tired of seeing your body put under immense physical and
            mental stress? Then, Zion Massage Chair is the right choice for you!
          </p>
        </div>
      </Col>
      <Col sm={12} md={6} className="px-0 mt-4 subheading-cont ">
        <BackgroundImage
          className="subheading-desc-cont ml-md-3"
          fluid={subImageOne.node.childImageSharp.fluid}
          alt={subImageOne.node.base.split(".")[0]}
        >
          <div className="subheading-overlay d-flex">
            <p className="mb-0 text-md font-secondary">Self-care anytime</p>
          </div>
        </BackgroundImage>
        <div className="subheading-content ml-md-3">
          <p className="px-5 py-2 text-gold">
            Going to a spa or massage parlor is undoubtedly a heavenly
            experience. The thing is, you can’t have a session everyday, or in
            the middle of the night when you can’t sleep no matter what.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default ImageSubHeader;

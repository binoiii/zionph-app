import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageExecutiveDescTwo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      executiveDescriptionTwo: file(
        relativePath: { eq: "products/executive/executive-description2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const executiveDescriptionTwo =
    data.executiveDescriptionTwo.childImageSharp.fluid;

  return (
    <Img
      alt="ZionExecutiveDescriptionTwo"
      fluid={executiveDescriptionTwo}
      className={className}
    />
  );
};

export default ImageExecutiveDescTwo;

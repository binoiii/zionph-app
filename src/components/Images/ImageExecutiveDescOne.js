import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageExecutiveDescOne = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      executiveDescriptionOne: file(
        relativePath: { eq: "products/executive/executive-description1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const executiveDescriptionOne =
    data.executiveDescriptionOne.childImageSharp.fluid;

  return (
    <Img
      alt="ZionExecutiveDescriptionOne"
      fluid={executiveDescriptionOne}
      className={className}
    />
  );
};

export default ImageExecutiveDescOne;

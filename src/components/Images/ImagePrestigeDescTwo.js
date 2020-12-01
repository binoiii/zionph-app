import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImagePrestigeDescTwo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      prestigeDescriptionTwo: file(
        relativePath: { eq: "products/prestige/prestige-description2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const prestigeDescriptionTwo =
    data.prestigeDescriptionTwo.childImageSharp.fluid;

  return (
    <Img
      alt="ZionPrestigeDescriptionTwo"
      fluid={prestigeDescriptionTwo}
      className={className}
    />
  );
};

export default ImagePrestigeDescTwo;

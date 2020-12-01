import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImagePrestigeDescOne = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      prestigeDescriptionOne: file(
        relativePath: { eq: "products/prestige/prestige-description1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const prestigeDescriptionOne =
    data.prestigeDescriptionOne.childImageSharp.fluid;

  return (
    <Img
      alt="ZionPrestigeDescriptionOne"
      fluid={prestigeDescriptionOne}
      className={className}
    />
  );
};

export default ImagePrestigeDescOne;

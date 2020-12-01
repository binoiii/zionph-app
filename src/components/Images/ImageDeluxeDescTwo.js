import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageDeluxeDescTwo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      deluxeDescriptionTwo: file(
        relativePath: { eq: "products/deluxe/deluxe-description2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const deluxeDescriptionTwo = data.deluxeDescriptionTwo.childImageSharp.fluid;

  return (
    <Img
      alt="ZionDeluxeDescriptionTwo"
      fluid={deluxeDescriptionTwo}
      className={className}
    />
  );
};

export default ImageDeluxeDescTwo;

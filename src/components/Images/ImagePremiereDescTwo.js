import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImagePremiereDescTwo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      premiereDescriptionTwo: file(
        relativePath: { eq: "products/premiere/premiere-description2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const premiereDescriptionTwo =
    data.premiereDescriptionTwo.childImageSharp.fluid;

  return (
    <Img
      alt="ZionPremiereDescriptionTwo"
      fluid={premiereDescriptionTwo}
      className={className}
    />
  );
};

export default ImagePremiereDescTwo;

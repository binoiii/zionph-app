import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImagePremiereDescOne = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      premiereDescriptionOne: file(
        relativePath: { eq: "products/premiere/premiere-description1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const premiereDescriptionOne =
    data.premiereDescriptionOne.childImageSharp.fluid;

  return (
    <Img
      alt="ZionPremiereDescriptionOne"
      fluid={premiereDescriptionOne}
      className={className}
    />
  );
};

export default ImagePremiereDescOne;

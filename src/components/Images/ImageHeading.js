import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";

export const ImageHeading = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg-gold.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080, maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  const dataImage = data.placeholderImage.childImageSharp.fluid;
  return (
    <BackgroundImage fluid={dataImage} className="heading">
      {children}
    </BackgroundImage>
  );
};

export default ImageHeading;

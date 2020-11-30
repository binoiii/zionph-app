import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";

export const ImageMainHeading = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg-livingroom-sm.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  const dataImage = data.placeholderImage.childImageSharp.fluid;
  return (
    <BackgroundImage fluid={dataImage} className="main-heading">
      {children}
    </BackgroundImage>
  );
};

export default ImageMainHeading;

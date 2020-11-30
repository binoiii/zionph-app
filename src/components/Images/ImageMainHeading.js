import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";

export const ImageMainHeading = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      homeImage: file(relativePath: { eq: "bg-livingroom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      homeImageMd: file(relativePath: { eq: "bg-livingroom-md.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      homeImageSm: file(relativePath: { eq: "bg-livingroom-sm.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 5676, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const { homeImage, homeImageMd, homeImageSm } = data;

  const source = [
    { ...homeImageSm.childImageSharp.fluid },
    { ...homeImageMd.childImageSharp.fluid, media: "(min-width:576px)" },
    { ...homeImage.childImageSharp.fluid, media: "(min-width:768px)" },
  ];

  return (
    <BackgroundImage atl="HomeImage" fluid={source} className="main-heading">
      {children}
    </BackgroundImage>
  );
};

export default ImageMainHeading;

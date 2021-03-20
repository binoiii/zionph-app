import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      imageBannerPlaceHolder: file(relativePath: { eq: "zion-carbon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imageBanner = data.imageBannerPlaceHolder.childImageSharp.fluid;

  return <Img alt="PromoBanner" fluid={imageBanner} />;
};

export default ImageBanner;

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImagePrestige = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      prestige: file(
        relativePath: { eq: "products/prestige/prestige-shadow.png" }
      ) {
        childImageSharp {
          fixed(width: 480, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      prestigeSm: file(
        relativePath: { eq: "products/prestige/prestige-shadow.png" }
      ) {
        childImageSharp {
          fixed(width: 315, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { prestigeSm, prestige } = data;

  const sources = [
    {
      ...prestigeSm.childImageSharp.fixed,
    },
    {
      ...prestige.childImageSharp.fixed,
      media: "(min-width: 576px)",
    },
  ];

  return <Img alt="ZionPrestige" fixed={sources} className={className} />;
};

export default ImagePrestige;

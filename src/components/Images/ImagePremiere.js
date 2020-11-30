import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImagePremiere = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      premiere: file(
        relativePath: { eq: "products/premiere/premiere-shadow.png" }
      ) {
        childImageSharp {
          fixed(width: 480, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      premiereSm: file(
        relativePath: { eq: "products/premiere/premiere-shadow.png" }
      ) {
        childImageSharp {
          fixed(width: 315, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { premiereSm, premiere } = data;

  const sources = [
    {
      ...premiereSm.childImageSharp.fixed,
    },
    {
      ...premiere.childImageSharp.fixed,
      media: "(min-width: 576px)",
    },
  ];

  return <Img alt="ZionPremiere" fixed={sources} className={className} />;
};

export default ImagePremiere;

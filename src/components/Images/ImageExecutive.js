import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageExecutive = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      executive: file(
        relativePath: { eq: "products/executive/executive-shadow.png" }
      ) {
        childImageSharp {
          fixed(width: 480, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      executiveSm: file(
        relativePath: { eq: "products/executive/executive-shadow.png" }
      ) {
        childImageSharp {
          fixed(width: 315, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { executiveSm, executive } = data;

  const sources = [
    {
      ...executiveSm.childImageSharp.fixed,
    },
    {
      ...executive.childImageSharp.fixed,
      media: "(min-width: 576px)",
    },
  ];
  return <Img alt="ZionExecutive" fixed={sources} className={className} />;
};

export default ImageExecutive;

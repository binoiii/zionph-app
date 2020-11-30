import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageExecutive = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "products/executive/executive-shadow.png" }
      ) {
        childImageSharp {
          fixed(width: 500, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const imageData = data.placeholderImage.childImageSharp.fixed;
  return <Img fixed={imageData} />;
};

export default ImageExecutive;

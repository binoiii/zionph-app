import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ProductImage = ({ alt, filename }) => {
  const data = useStaticQuery(graphql`
    query {
      imageLargePlaceholder: allFile(
        filter: { relativeDirectory: { eq: "products" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 480, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
            name
            extension
          }
        }
      }
      imageSmallPlaceholder: allFile(
        filter: {
          relativeDirectory: { eq: "products" }
          extension: { regex: "/jpg|png/i" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 315, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
            name
            extension
          }
        }
      }
    }
  `);

  const imageSmall = data.imageSmallPlaceholder.edges.find(image => {
    const { name, extension } = image.node;
    const imageName = `${name}.${extension}`;
    console.log(imageName, filename, "Checking");
    return imageName.includes(filename);
  }).node.childImageSharp.fixed;

  const imageLarge = data.imageLargePlaceholder.edges.find(image => {
    const { name, extension } = image.node;
    const imageName = `${name}.${extension}`;
    return imageName.includes(filename);
  }).node.childImageSharp.fixed;

  const imageSources = [
    {
      ...imageSmall,
    },
    {
      ...imageLarge,
      media: "(min-width: 576px)",
    },
  ];

  return <Img alt={alt} fixed={imageSources} />;
};

export default ProductImage;

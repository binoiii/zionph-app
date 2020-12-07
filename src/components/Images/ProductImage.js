import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ProductImage = ({ filename }) => {
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
          }
        }
      }
    }
  `);

  const imageSmall = data.imageSmallPlaceholder.edges.find(image =>
    image.node.name.includes(filename)
  ).node.childImageSharp.fixed;

  const imageLarge = data.imageLargePlaceholder.edges.find(image =>
    image.node.name.includes(filename)
  ).node.childImageSharp.fixed;

  const imageSources = [
    {
      ...imageSmall,
    },
    {
      ...imageLarge,
      media: "(min-width: 576px)",
    },
  ];

  return <Img alt={filename} fixed={imageSources} />;
};

export default ProductImage;

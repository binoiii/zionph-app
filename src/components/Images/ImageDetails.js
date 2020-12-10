import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageDetails = ({ image: imageName }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "product-descriptions" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            extension
            name
          }
        }
      }
    }
  `);

  const imageDetail = data.allFile.edges.find(imageDetail => {
    const { name, extension } = imageDetail.node;
    const imageFileName = `${name}.${extension}`;
    return imageFileName.includes(imageName);
  }).node.childImageSharp.fluid;

  const alt = imageName.substring(0, imageName.lastIndexOf(".")) || imageName;

  return <Img alt={alt} fluid={imageDetail} />;
};

export default ImageDetails;

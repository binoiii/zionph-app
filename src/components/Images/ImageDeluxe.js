import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageDeluxe = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      deluxe: file(relativePath: { eq: "products/deluxe/deluxe-shadow.png" }) {
        childImageSharp {
          fixed(width: 500, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      deluxeSm: file(
        relativePath: { eq: "products/deluxe/deluxe-shadow.png" }
      ) {
        childImageSharp {
          fixed(width: 315, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { deluxe, deluxeSm } = data;

  const sources = [
    {
      ...deluxeSm.childImageSharp.fixed,
    },
    {
      ...deluxe.childImageSharp.fixed,
      media: "(min-width: 576px)",
    },
  ];

  return <Img alt="ZionDeluxe" fixed={sources} className={className} />;
};

export default ImageDeluxe;

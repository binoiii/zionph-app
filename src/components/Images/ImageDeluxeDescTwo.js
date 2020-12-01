import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageDelImageDeluxeDescTwo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      ImageDelImageDeluxeDescTwo: file(
        relativePath: { eq: "products/deluxe/deluxe-description2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const sources = data.ImageDelImageDeluxeDescTwo.childImageSharp.fluid;

  console.log(sources);

  //   const { deluxeSm, deluxe } = data;

  //   const sources = [
  //     {
  //       ...deluxeSm.childImageSharp.fixed,
  //     },
  //     {
  //       ...deluxe.childImageSharp.fixed,
  //       media: "(min-width: 576px)",
  //     },
  //   ];

  return (
    <Img alt="ZionDeluxeDescriptionOne" fluid={sources} className={className} />
  );
};

export default ImageDelImageDeluxeDescTwo;

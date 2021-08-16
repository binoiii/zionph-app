import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ProductsPromoBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      productsPromoBanner: file(relativePath: { eq: "products-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const productsPromoBanner = data.productsPromoBanner.childImageSharp.fluid;

  return (
    <div className="mt-5">
      <Img alt="ProductsPromoBanner" fluid={productsPromoBanner} />
    </div>
  );
};

export default ProductsPromoBanner;

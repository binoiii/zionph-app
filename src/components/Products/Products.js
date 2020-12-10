import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Fade from "react-reveal/Fade";

import Product from "./Product";

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        id
        products {
          product
          originalPrice
          price
          productImage
          productDetailImages
          descriptions
          reviews {
            client
            review
          }
        }
      }
    }
  `);

  const { products } = data.dataJson;
  return (
    <section id="products">
      {products &&
        products.map((product, i) => (
          <Fade key={i} left duration={1000} delay={500} distance="30px">
            <Product props={product} />{" "}
          </Fade>
        ))}
    </section>
  );
};

export default Products;

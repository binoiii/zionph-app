import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Fade from "react-reveal/Fade";

import Product from "./Product";

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
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
    }
  `);

  const { products } = data.allDataJson.edges[0].node;

  return (
    <section id="products" className="pb-5">
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

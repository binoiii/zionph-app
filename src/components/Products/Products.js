import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Fade from "react-reveal/Fade";

// import Deluxe from "./Deluxe";
// import Premiere from "./Premiere";
// import Prestige from "./Prestige";
// import Executive from "./Executive";

import Product from "./Product";

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            products {
              product
              originalPrice
              price
              productImage
              descriptions
              reviews {
                client
                review
              }
            }
          }
        }
      }
    }
  `);

  const { products } = data.allDataJson.edges[0].node;
  return (
    <section id="products">
      {products &&
        products.map((entry, i) => (
          <Fade key={i} left duration={1000} delay={500} distance="30px">
            <Product props={entry} />{" "}
          </Fade>
        ))}
      {/* <Fade left duration={1000} delay={500} distance="30px">
        <Deluxe product="deluxe" originalPrice="111,998" price="55,999" />
      </Fade>
      <Fade left duration={1000} delay={500} distance="30px">
        <Premiere product="premiere" originalPrice="131,998" price="65,999" />
      </Fade>
      <Fade left duration={1000} delay={500} distance="30px">
        <Prestige product="prestige" originalPrice="159,998" price="79,999" />
      </Fade>
      <Fade left duration={1000} delay={500} distance="30px">
        <Executive product="executive" originalPrice="199,998" price="99,999" />
      </Fade> */}
    </section>
  );
};

export default Products;

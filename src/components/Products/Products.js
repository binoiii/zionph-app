import React from "react";

import Deluxe from "./Deluxe";
import Prestige from "./Prestige";
import Executive from "./Executive";

const Products = () => {
  return (
    <section id="products">
      <Deluxe />
      <Prestige />
      <Executive />
    </section>
  );
};

export default Products;

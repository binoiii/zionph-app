import React from "react";

import Deluxe from "./Deluxe";
import Premiere from "./Premiere";
import Prestige from "./Prestige";
import Executive from "./Executive";

const Products = () => {
  return (
    <section id="products">
      <Deluxe />
      <Premiere />
      <Prestige />
      <Executive />
    </section>
  );
};

export default Products;

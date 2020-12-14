import React from "react";
import Fade from "react-reveal/Fade";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import OrderForm from "../../components/OrderForm/OrderForm";

const Prestige = () => {
  return (
    <Layout>
      <SEO title="Order Form" />
      <Fade left duration={1000} distance="30px">
        <OrderForm product="Prestige" price="79,999" />
      </Fade>
    </Layout>
  );
};

export default Prestige;

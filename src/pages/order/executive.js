import React from "react";
import Fade from "react-reveal/Fade";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import OrderForm from "../../components/OrderForm/OrderForm";

const Executive = () => {
  return (
    <Layout>
      <SEO title="Order Form" />
      <Fade left duration={1000} distance="30px">
        <OrderForm product="Executive" price="99,999" />
      </Fade>
    </Layout>
  );
};

export default Executive;

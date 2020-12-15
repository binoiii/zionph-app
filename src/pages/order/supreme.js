import React from "react";
import Fade from "react-reveal/Fade";

import Layout from "../../components/layout";
import SEO from "../../components/Seo/Seo";
import OrderForm from "../../components/OrderForm/OrderForm";

const Supreme = () => {
  return (
    <Layout>
      <SEO title="Order Form" />
      <Fade left duration={1000} distance="30px">
        <OrderForm product="Supreme" price="69,999" />
      </Fade>
    </Layout>
  );
};

export default Supreme;

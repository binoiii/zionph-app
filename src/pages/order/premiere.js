import React from "react";
import Fade from "react-reveal/Fade";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import OrderForm from "../../components/OrderForm/OrderForm";

const premiere = ({ location }) => {
  return (
    <Layout>
      <SEO title="Order Form" />
      <Fade left duration={1000} distance="30px">
        <OrderForm location={location} />
      </Fade>
    </Layout>
  );
};

export default premiere;

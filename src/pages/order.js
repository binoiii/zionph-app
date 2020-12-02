import React from "react";
import Fade from "react-reveal/Fade";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/Headings/Heading";
import Order from "../components/Sections/Order";

const OrderPage = () => {
  return (
    <Layout>
      <SEO title="Order" />
      <Heading title="Order" />
      <Fade bottom duration={1000} delay={550}>
        <Order />
      </Fade>
    </Layout>
  );
};

export default OrderPage;

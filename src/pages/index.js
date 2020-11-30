import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import MainHeading from "../components/Headings/MainHeading";
import Products from "../components/Products/Products";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainHeading />
    <Products />
  </Layout>
);

export default IndexPage;

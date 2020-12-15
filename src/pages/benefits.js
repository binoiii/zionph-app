import React from "react";
import Fade from "react-reveal/Fade";

import Layout from "../components/layout";
import SEO from "../components/Seo/Seo";
import Heading from "../components/Headings/Heading";
import ProductBenefits from "../components/Sections/ProductBenefits";
import BackTop from "../components/Utilities/BackTop";

const Benefits = () => (
  <Layout>
    <SEO title="Benefits" />
    <Heading title="Health Benefits" />
    <Fade left duration={1000} delay={550} distance="30px">
      <ProductBenefits />
    </Fade>
    <BackTop />
  </Layout>
);

export default Benefits;

import React from "react";
import Fade from "react-reveal/Fade";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/Headings/Heading";
import Client from "../components/Sections/Client";
import BackTop from "../components/Utilities/BackTop";

const Clients = () => (
  <Layout>
    <SEO title="Clients" />
    <Heading title="Clients Nationwide" />
    <Fade left duration={1000} delay={550} distance="30px">
      <Client />
    </Fade>
    <BackTop />
  </Layout>
);

export default Clients;

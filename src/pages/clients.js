import React from "react";
import Fade from "react-reveal/Fade";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/Headings/Heading";
import Client from "../components/Sections/Client";

const Clients = () => (
  <Layout>
    <SEO title="Clients" />
    <Heading title="Clients" />
    <Fade left duration={1000} delay={550} distance="30px">
      <Client />
    </Fade>
  </Layout>
);

export default Clients;

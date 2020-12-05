import React from "react";
import Fade from "react-reveal/Fade";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/Headings/Heading";
import Clients from "../components/Sections/Clients";

const AboutPage = () => (
  <Layout>
    <SEO title="Clients" />
    <Heading title="Clients" />
    <Fade left duration={1000} delay={550} distance="30px">
      <Clients />
    </Fade>
  </Layout>
);

export default AboutPage;

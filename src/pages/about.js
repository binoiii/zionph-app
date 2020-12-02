import React from "react";
import Fade from "react-reveal/Fade";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/Headings/Heading";
import MissionVision from "../components/Sections/MissionVision";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Heading title="About Us" />
    <Fade left duration={1000} delay={550} distance="30px">
      <MissionVision />
    </Fade>
  </Layout>
);

export default AboutPage;

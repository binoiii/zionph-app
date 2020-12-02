import React from "react";
import Fade from "react-reveal/Fade";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/Headings/Heading";
import ContactDetails from "../components/Sections/ContactDetails";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Heading title="Contact Us" />
    <Fade left duration={1000} delay={550} distance="30px">
      <ContactDetails />
    </Fade>
  </Layout>
);

export default Contact;

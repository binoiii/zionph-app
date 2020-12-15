import React from "react";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";

import Layout from "../components/layout";
import SEO from "../components/Seo/Seo";

const ThankYou = () => (
  <Layout>
    <SEO title="Thank You" />
    <Fade left duration={1000} distance="30px">
      <div
        className="mt-5 d-flex flex-column justify-content-center"
        style={{ height: "200px" }}
      >
        <h1 className="mb-3">Thank you</h1>
        <p>Thank you for trusting Zion Philippines.</p>
        <p>We will update you with the status of your order.</p>
        <p className="pt-3">
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Fade>
  </Layout>
);

export default ThankYou;

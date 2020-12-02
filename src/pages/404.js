import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div
      className="mt-5 d-flex flex-column justify-content-center"
      style={{ height: "200px" }}
    >
      <h1 className="mb-3">NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
      <p className="pt-3">
        <Link to="/">Back to home</Link>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;

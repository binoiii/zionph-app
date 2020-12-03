import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";

import Navigation from "./Navigation/Navigation";
// import { CustomerChat } from "./fbmessenger";
import Footer from "./Footer/Footer";
import "../style/main.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <main>
        <Container fluid="md" className="py-0">
          {children}
        </Container>
      </main>
      {/* <CustomerChat /> */}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

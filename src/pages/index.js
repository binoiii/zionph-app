import React, { useState } from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import MainHeading from "../components/Headings/MainHeading";
import Products from "../components/Products/Products";
import BannerModal from "../components/Modals/BannerModal";

const IndexPage = () => {
  const [modalShow, setModalShow] = useState(true);

  return (
    <Layout>
      <SEO title="Home" />
      <MainHeading />
      <Products />
      <BannerModal show={modalShow} onHide={() => setModalShow(false)} />
    </Layout>
  );
};

export default IndexPage;

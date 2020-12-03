import React, { useState, useEffect } from "react";

import { CustomerChat } from "../fbmessenger";

import SEO from "../components/seo";
import Layout from "../components/layout";
import MainHeading from "../components/Headings/MainHeading";
import Products from "../components/Products/Products";
import BannerModal from "../components/Modals/BannerModal";

const IndexPage = () => {
  const [modalShow, setModalShow] = useState();

  const handleSession = () => sessionStorage.setItem("visited", true);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");
    if (visited) return setModalShow(false);
    return setModalShow(true);
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <MainHeading />
      <Products />
      <BannerModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onExited={handleSession}
      />
      <CustomerChat />
    </Layout>
  );
};

export default IndexPage;

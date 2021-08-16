import React, { useState, useEffect } from "react";

import SEO from "../components/Seo/Seo";
import Layout from "../components/layout";
import MainHeading from "../components/Headings/MainHeading";
import Freebies from "../components/Sections/Freebies";
import Awards from "../components/Sections/Awards";
import Icons from "../components/Sections/Icons";
import Products from "../components/Products/Products";
import BannerModal from "../components/Modals/BannerModal";
import BackTop from "../components/Utilities/BackTop";

const IndexPage = () => {
  const [modalShow, setModalShow] = useState(true);

  const handleSession = () => sessionStorage.setItem("visited", true);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");
    if (visited) return setModalShow(false);
  }, []);

  return (
    <>
      <BannerModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onExited={handleSession}
      />
      <Layout>
        <SEO title="Home" />
        <MainHeading />
        <Freebies />
        <Awards />
        <Icons />
        <Products />
        <BackTop />
      </Layout>
    </>
  );
};

export default IndexPage;

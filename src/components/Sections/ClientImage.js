import React, { useState } from "react";
import Img from "gatsby-image";

import ClientImageModal from "../Modals/ClientImageModal";

const ClientImage = props => {
  const [modalClientShow, setModalClientShow] = useState(false);
  const showModalClient = () => setModalClientShow(true);
  const closeModalClient = () => setModalClientShow(false);

  const { childImageSharp, name } = props.image;

  return (
    <>
      <button className="client-image-container" onClick={showModalClient}>
        <Img
          className="client-image"
          fluid={childImageSharp.fluid}
          atl={name}
        />
      </button>
      <ClientImageModal
        show={modalClientShow}
        onHide={closeModalClient}
        image={props}
      />
    </>
  );
};

export default ClientImage;

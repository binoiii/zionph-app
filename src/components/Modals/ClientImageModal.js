import React from "react";
import { Modal } from "react-bootstrap";
import Img from "gatsby-image";

const ClientImageModal = props => {
  const {
    image: { childImageSharp, name },
  } = props.image;

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Img
          className="client-image"
          fluid={childImageSharp.fluid}
          atl={name}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ClientImageModal;

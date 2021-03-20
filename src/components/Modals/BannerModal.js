import React from "react";
import { Modal } from "react-bootstrap";

import ImageBanner from "../Images/ImageBanner";

const BannerModal = props => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ImageBanner />
      </Modal.Body>
    </Modal>
  );
};

export default BannerModal;

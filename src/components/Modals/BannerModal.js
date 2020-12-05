import React from "react";
import { Modal } from "react-bootstrap";

import ImageBanner from "../Images/ImageBanner";

const BannerModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-1">
        <ImageBanner />
      </Modal.Body>
    </Modal>
  );
};

export default BannerModal;

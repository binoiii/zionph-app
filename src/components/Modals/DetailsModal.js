import React from "react";
import { Modal } from "react-bootstrap";

import ImageDeluxe from "../Images/ImageDeluxe";

const DetailsModal = props => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ImageDeluxe />
      </Modal.Body>
    </Modal>
  );
};

export default DetailsModal;

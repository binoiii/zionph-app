import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";

import ImageDeluxeDescOne from "../Images/ImageDeluxeDescOne";
import ImageDeluxeDescTwo from "../Images/ImageDeluxeDescTwo";
import PrevNextIcon from "../Utilities/PrevNextIcon";

const DeluxeDetailsModal = props => {
  return (
    <Modal
      className="modal-deluxe"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Carousel
          interval={3000}
          pause={"hover"}
          fade={true}
          prevIcon={<PrevNextIcon iconClass="prev prev-next-deluxe" />}
          nextIcon={<PrevNextIcon iconClass="prev-next-deluxe" />}
        >
          <Carousel.Item>
            <ImageDeluxeDescOne />
          </Carousel.Item>
          <Carousel.Item>
            <ImageDeluxeDescTwo />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default DeluxeDetailsModal;

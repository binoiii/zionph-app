import React from "react";
import { Modal, Carousel } from "react-bootstrap";

import ImagePrestigeDescOne from "../Images/ImagePrestigeDescOne";
import ImagePrestigeDescTwo from "../Images/ImagePrestigeDescTwo";
import PrevNextIcon from "../Utilities/PrevNextIcon";

const PrestigeDetailsModal = props => {
  return (
    <Modal
      className="modal-prestige"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Carousel
          interval={null}
          pause={"hover"}
          fade={true}
          prevIcon={<PrevNextIcon iconClass="prev prev-next-prestige" />}
          nextIcon={<PrevNextIcon iconClass="prev-next-prestige" />}
        >
          <Carousel.Item>
            <ImagePrestigeDescOne />
          </Carousel.Item>
          <Carousel.Item>
            <ImagePrestigeDescTwo />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default PrestigeDetailsModal;

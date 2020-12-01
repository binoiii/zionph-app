import React from "react";
import { Modal, Carousel } from "react-bootstrap";

import ImageExecutiveDescOne from "../Images/ImageExecutiveDescOne";
import ImageExecutiveDescTwo from "../Images/ImageExecutiveDescTwo";
import PrevNextIcon from "../Utilities/PrevNextIcon";

const ExecutiveDetailsModal = props => {
  return (
    <Modal
      className="modal-executive"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Carousel
          interval={null}
          pause={"hover"}
          fade={true}
          prevIcon={<PrevNextIcon iconClass="prev prev-next-executive" />}
          nextIcon={<PrevNextIcon iconClass="prev-next-executive" />}
        >
          <Carousel.Item>
            <ImageExecutiveDescOne />
          </Carousel.Item>
          <Carousel.Item>
            <ImageExecutiveDescTwo />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default ExecutiveDetailsModal;

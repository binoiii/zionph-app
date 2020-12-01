import React from "react";
import { Modal, Carousel } from "react-bootstrap";

import ImagePremiereDescOne from "../Images/ImagePremiereDescOne";
import ImagePremiereDescTwo from "../Images/ImagePremiereDescTwo";
import PrevNextIcon from "../Utilities/PrevNextIcon";

const PremiereDetailsModal = props => {
  return (
    <Modal
      className="modal-premiere"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Carousel
          interval={null}
          pause={"hover"}
          fade={true}
          prevIcon={<PrevNextIcon iconClass="prev prev-next-premiere" />}
          nextIcon={<PrevNextIcon iconClass="prev-next-premiere" />}
        >
          <Carousel.Item>
            <ImagePremiereDescOne />
          </Carousel.Item>
          <Carousel.Item>
            <ImagePremiereDescTwo />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default PremiereDetailsModal;

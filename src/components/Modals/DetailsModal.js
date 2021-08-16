import React from "react";
import { Modal, Carousel } from "react-bootstrap";

import PrevNextIcon from "../Utilities/PrevNextIcon";
import ImageDetail from "../Images/ImageDetails";

const DetailsModal = props => {
  const { product, images } = props;
  return (
    <Modal
      className={`modal-${product}`}
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel
          interval={null}
          pause={"hover"}
          fade={true}
          prevIcon={<PrevNextIcon iconClass={`prev prev-next-${product}`} />}
          nextIcon={<PrevNextIcon iconClass={`prev-next-${product}`} />}
        >
          {images &&
            images.map((productDetailImage, i) => (
              <Carousel.Item key={i}>
                <ImageDetail image={productDetailImage} />
              </Carousel.Item>
            ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default DetailsModal;

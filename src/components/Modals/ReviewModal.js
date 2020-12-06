import React from "react";
import { Modal, Carousel } from "react-bootstrap";

import PrevNextIcon from "../Utilities/PrevNextIcon";
import ReviewCard from "./ReviewCard";

const ReviewModal = props => {
  const { reviews } = props;

  return (
    <Modal
      className="modal-review"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Carousel
          interval={null}
          pause={"hover"}
          fade={true}
          prevIcon={<PrevNextIcon iconClass="prev prev-next-review" />}
          nextIcon={<PrevNextIcon iconClass="prev-next-review" />}
        >
          {reviews &&
            reviews.map((review, i) => (
              <Carousel.Item key={i}>
                <ReviewCard review={review} />
              </Carousel.Item>
            ))}
          {/* <Carousel.Item>
            <ReviewCard />
          </Carousel.Item>
          <Carousel.Item>
            <ReviewCard />
          </Carousel.Item> */}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default ReviewModal;

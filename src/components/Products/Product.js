import React, { useState } from "react";
import { Link } from "gatsby";
import { Row, Col, Button } from "react-bootstrap";

import ImageDeluxe from "../Images/ImageDeluxe";
import DeluxeDetailsModal from "../Modals/DeluxeDetailsModal";
import ReviewModal from "../Modals/ReviewModal";

const Deluxe = ({
  props: { product, originalPrice, price, descriptions, reviews },
}) => {
  const [modalDetailsShow, setModalDetailsShow] = useState(false);
  const [modalReviewShow, setModalReviewShow] = useState(false);

  const showModalDetails = () => setModalDetailsShow(true);
  const closeModalDetails = () => setModalDetailsShow(false);
  const showReviewDetails = () => setModalReviewShow(true);
  const closeReviewDetails = () => setModalReviewShow(false);

  return (
    <Row className="product pt-5 mt-5">
      <Col sm={12} md={6}>
        <ImageDeluxe />
      </Col>
      <Col
        sm={12}
        md={6}
        className="d-flex flex-column align-items-end pt-sm-0 p-md-5"
      >
        <h1 className="my-0 text-right shadow-deluxe">
          <span className="text-primary">zion</span>
          {product}
        </h1>
        <span className="text-danger">
          <small
            className="text-gray mr-1"
            style={{ textDecoration: "line-through" }}
          >
            &#8369; {originalPrice}
          </small>
          &#8369; {price}
        </span>
        <Button className="unbutton text-gold" onClick={showReviewDetails}>
          View Product Reviews
        </Button>
        <div className="product-description my-3 my-md-4 my-lg-5 text-right">
          {descriptions &&
            descriptions.map((description, i) => <p key={i}>{description}</p>)}
        </div>
        <Button
          variant="outline-secondary"
          style={{ padding: "10px 20.845px" }}
          onClick={showModalDetails}
        >
          More Details
        </Button>
        <Button className="mt-2" as={Link} to={`/order/${product}/`}>
          Order Now
        </Button>
        <ReviewModal
          show={modalReviewShow}
          onHide={closeReviewDetails}
          reviews={reviews}
        />
        <DeluxeDetailsModal
          show={modalDetailsShow}
          onHide={closeModalDetails}
        />
      </Col>
    </Row>
  );
};

export default Deluxe;

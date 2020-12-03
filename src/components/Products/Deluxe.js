import React, { useState } from "react";
import { Link } from "gatsby";
import { Row, Col, Button } from "react-bootstrap";

import DeluxeDetailsModal from "../Modals//DeluxeDetailsModal";
import ImageDeluxe from "../Images/ImageDeluxe";

const Deluxe = ({ product = "deluxe", originalPrice, price = "55,999" }) => {
  const [modalDetailsShow, setModalDetailsShow] = useState(false);

  const showModalDetails = () => setModalDetailsShow(true);
  const closeModalDetails = () => setModalDetailsShow(false);

  return (
    <Row className="deluxe pt-5 mt-5">
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
        <div className="my-3 my-md-4 my-lg-5 text-right">
          <p>Core for more Intelligent</p>
          <p>3D Massage Manipulator</p>
          <p className="mb-0">Deep Spa and Multipoint Massage</p>
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
        <DeluxeDetailsModal
          show={modalDetailsShow}
          onHide={closeModalDetails}
        />
      </Col>
    </Row>
  );
};

export default Deluxe;

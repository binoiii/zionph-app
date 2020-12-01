import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

import OrderFormModal from "../Modals/OrderFormModal";
import ImagePrestige from "../Images/ImagePrestige";

const Prestige = () => {
  const [modalDetailsShow, setModalDetailsShow] = useState(false);
  const [modalOrderShow, setModalOrderShow] = useState(false);

  const showModalDetails = () => setModalDetailsShow(true);
  const closeModalDetails = () => setModalDetailsShow(false);

  const showModalOrder = () => setModalOrderShow(true);
  const closeModalOrder = () => setModalOrderShow(false);

  return (
    <Row className="prestige pt-5 mt-5">
      <Col sm={12} md={6}>
        <ImagePrestige className="prestige-image" />
      </Col>
      <Col
        sm={12}
        md={6}
        className="d-flex flex-column align-items-end pt-sm-0 p-md-5"
      >
        <h1 className="my-0 text-right">
          <span className="text-primary">zion</span>Prestige
        </h1>
        <span className="text-danger">
          <small
            className="text-gray mr-1"
            style={{ textDecoration: "line-through" }}
          >
            &#8369; 159,998
          </small>
          &#8369; 79,999
        </span>
        <div className="my-3 my-md-4 my-lg-5 text-right">
          <p>Core for more Intelligent</p>
          <p>8D Massage Manipulator</p>
          <p className="mb-0">Human Stimulation Massage</p>
        </div>
        <Button variant="outline-secondary" onClick={showModalDetails}>
          View Details
        </Button>
        <Button
          className="mt-2"
          style={{ padding: "15px 30px" }}
          onClick={showModalOrder}
        >
          Order Now
        </Button>
        <OrderFormModal show={modalOrderShow} onHide={closeModalOrder} />
      </Col>
    </Row>
  );
};

export default Prestige;

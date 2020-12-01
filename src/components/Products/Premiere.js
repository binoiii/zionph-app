import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

import PremiereDetailsModal from "../Modals/PremiereDetailsModal";
import OrderFormModal from "../Modals/OrderFormModal";
import ImagePremiere from "../Images/ImagePremiere";

const Premiere = () => {
  const [modalDetailsShow, setModalDetailsShow] = useState(false);
  const [modalOrderShow, setModalOrderShow] = useState(false);

  const showModalDetails = () => setModalDetailsShow(true);
  const closeModalDetails = () => setModalDetailsShow(false);

  const showModalOrder = () => setModalOrderShow(true);
  const closeModalOrder = () => setModalOrderShow(false);

  return (
    <Row className="premiere pt-5 mt-5">
      <Col sm={12} md={6}>
        <ImagePremiere />
      </Col>
      <Col
        sm={12}
        md={6}
        className="d-flex flex-column align-items-end pt-sm-0 p-md-5"
      >
        <h1 className="my-0 text-right">
          <span className="text-primary">Zion</span>
          Premiere
        </h1>
        <span className="text-danger">
          <small
            className="text-gray mr-1"
            style={{ textDecoration: "line-through" }}
          >
            &#8369; 131,998
          </small>
          &#8369; 65,999
        </span>
        <div className="my-3 my-md-4 my-lg-5 text-right">
          <p>Core for more Intelligent</p>
          <p>4D Massage Manipulator</p>
          <p className="mb-0">8 Points Massage Focus</p>
        </div>
        <Button variant="outline-secondary" onClick={showModalDetails}>
          More Details
        </Button>
        <Button
          className="mt-2"
          style={{ padding: "15px 31.5px" }}
          onClick={showModalOrder}
        >
          Order Now
        </Button>
        <PremiereDetailsModal
          show={modalDetailsShow}
          onHide={closeModalDetails}
        />
        <OrderFormModal
          product="PREMIERE"
          price="&#8369; 65,999"
          show={modalOrderShow}
          onHide={closeModalOrder}
        />
      </Col>
    </Row>
  );
};

export default Premiere;

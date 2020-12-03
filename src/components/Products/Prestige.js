import React, { useState } from "react";
import { Link } from "gatsby";
import { Row, Col, Button } from "react-bootstrap";

import PrestigeDetailsModal from "../Modals/PrestigeDetailsModal";
import ImagePrestige from "../Images/ImagePrestige";

const Prestige = ({ product, originalPrice, price }) => {
  const [modalDetailsShow, setModalDetailsShow] = useState(false);

  const showModalDetails = () => setModalDetailsShow(true);
  const closeModalDetails = () => setModalDetailsShow(false);

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
          <span className="text-primary">Zion</span>
          Prestige
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
          <p>8D Massage Manipulator</p>
          <p className="mb-0">Human Stimulation Massage</p>
        </div>
        <Button
          variant="outline-secondary"
          style={{ padding: "10px 20.845px" }}
          onClick={showModalDetails}
        >
          More Details
        </Button>
        <Button className="mt-2" as={Link} to={`/order/${product}`}>
          Order Now
        </Button>
        <PrestigeDetailsModal
          show={modalDetailsShow}
          onHide={closeModalDetails}
        />
      </Col>
    </Row>
  );
};

export default Prestige;

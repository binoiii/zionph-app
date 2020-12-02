import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import MainForm from "./MainForm";

const OrderForm = ({
  location: {
    state: { product, price },
  },
}) => {
  return (
    <section className="order">
      <Container>
        <Row className="mt-5 d-flex justify-content-center">
          <Col sm={10} md={6}>
            <div className="order-head text-center">
              <h4>
                <span className="text-gold">ZION</span>
                <span>{product}</span>
              </h4>
              <p className="text-danger">{`₱ ${price} - 50% Limited Time Offer`}</p>
              <p>
                Please fill out the form to reserve your unit. Upon submitting
                this form, strictly{" "}
                <span className="text-danger font-weight-heavy">
                  NO CANCELLATION
                </span>{" "}
                of order.
              </p>
            </div>
            <MainForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrderForm;

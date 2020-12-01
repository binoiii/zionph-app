import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const OrderFormModal = props => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="font-secondary">
            <span className="text-gold">ZION</span>
            <span>{props.product}</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form method="POST" name="Order Details" data-netlify="true">
          <input type="hidden" name="form-name" value="Order Details" />
          <Form.Group>
            <Form.Control
              type="text"
              value={`${props.price} | 50% LIMITED OFF`}
              name="price"
              className="bg-white text-danger text-center"
              disabled
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="fullname"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Address"
              name="address"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="number"
              placeholder="Contact Number"
              name="contact"
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="Add a note"
              name="notes"
              rows={2}
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Order
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OrderFormModal;

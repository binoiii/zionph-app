import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const OrderFormModal = props => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group Required>
            <Form.Control type="text" placeholder="Full Name" required />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Address" required />
          </Form.Group>
          <Form.Group>
            <Form.Control type="number" placeholder="Contact Number" required />
          </Form.Group>
          <Form.Group>
            <Form.Control as="select" required>
              <option className="text-muted">Choose your product</option>
              <option>Deluxe - &#8369; 55,999 | 50% OFF</option>
              <option>Premiere - &#8369; 65,999 | 50% OFF</option>
              <option>Prestige - &#8369; 79,999 | 50% OFF</option>
              <option>Executive - &#8369; 99,999 | 50% OFF</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OrderFormModal;

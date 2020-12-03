import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "gatsby";
import { navigate } from "gatsby-link";

const MainForm = ({ product, price }) => {
  const [state, setState] = useState({ product, price });

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };
  return (
    <div className="pt-3">
      <Form
        name="order"
        method="post"
        action="/thankyou"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="order" />
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Complete Name"
            name="client"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Complete Address"
            name="address"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Postal Code"
            name="postal"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="number"
            placeholder="Cellphone Number"
            name="contact"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button
            as={Link}
            to="/"
            variant="outline-secondary"
            style={{ padding: "15px 31.5px" }}
          >
            Back
          </Button>
          <Button
            variant="primary"
            className="ml-3"
            style={{ padding: "15px 31.5px" }}
            type="submit"
          >
            Order
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default MainForm;

import React, { useState } from "react";
import { navigate } from "gatsby-link";
import { Form, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/Headings/Heading";

const OrderPage = () => {
  const [state, setState] = useState({});

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
    <Layout>
      <SEO title="Order" />
      <Heading title="Order" />
      <Fade bottom duration={1000} delay={550}>
        <Form
          name="order"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="order" />
          <Form.Group>
            <Form.Control
              className="bg-white text-danger text-center"
              type="text"
              value={`50% LIMITED OFF`}
              name="price"
              onChange={handleChange}
              disabled
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="fullname"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="number"
              placeholder="Contact Number"
              name="contact"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="Add a note"
              name="note"
              onChange={handleChange}
              rows={2}
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Order
            </Button>
          </div>
        </Form>
      </Fade>
    </Layout>
  );
};

export default OrderPage;

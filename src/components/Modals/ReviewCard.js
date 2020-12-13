import React from "react";
import { Card } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";
import { IconContext } from "react-icons";

import Star from "../../components/Utilities/Star.js";

const ReviewCard = ({ review: { client, review } }) => {
  return (
    <Card className="review-card">
      <Card.Body
        style={{ padding: "1.5rem 2.5rem 2.5rem 2.5rem", margin: "2rem 0" }}
      >
        <Card.Title className="d-flex flex-column justify-content-center align-items-center">
          <div className="review-card-profile mb-3">
            <IconContext.Provider
              value={{ className: "review-card-profile-icon" }}
            >
              <BsPerson />
            </IconContext.Provider>
          </div>
          <div className="d-block text-primary mb-3">
            <Star />
          </div>
          <div className="font-weight-heavy">{client}</div>
        </Card.Title>
        <Card.Text className="mt-5 mb-3">{review}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;

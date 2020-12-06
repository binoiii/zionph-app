import React from "react";
import { Card } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";
import { IconContext } from "react-icons";

import Star from "../../components/Utilities/Star.js";

const ReviewCard = () => {
  return (
    <Card className="review-card">
      <Card.Body style={{ padding: "2rem 2.5rem", margin: "2rem 0" }}>
        <Card.Title className="d-flex align-items-center">
          <div className="review-card-profile">
            <IconContext.Provider
              value={{ className: "review-card-profile-icon" }}
            >
              <BsPerson />
            </IconContext.Provider>
          </div>
          <div className="ml-3 font-weight-heavy">
            Albino C. Cordova
            <span
              className="d-block mt-1 text-primary"
              style={{ marginLeft: "-2px" }}
            >
              <Star />
            </span>
          </div>
        </Card.Title>
        <Card.Text className="mt-5 mb-3">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;

import React from "react";
import { Row, Col } from "react-bootstrap";

const ProductBenefits = () => {
  return (
    <section className="benefits mt-5 pl-0 pl-sm-5">
      <Row>
        <Col xs={12} sm={10} md={8}>
          <h5 className="font-primary">
            Here are the top reasons why you should avail our affordable, yet
            quality massage chairs in the market:
          </h5>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <ul className="pl-0 pl-md-5">
            <ol>1. Reduce stress, tension, and anxiety</ol>
            <ol>2. Relax and loosen sore muscles</ol>
            <ol>3. Improve blood flow</ol>
            <ol>4. Boost immune system</ol>
            <ol>5. Mobilize lymphatic circulation</ol>
            <ol>6. Alleviate pain and headaches</ol>
            <ol>7. Decompress and improve spine alignment</ol>
            <ol>8. Improve posture</ol>
            <ol>9. Generate more flexibility</ol>
            <ol>10. Regulate high blood pressure </ol>
            <ol>11. Improve sleep quality </ol>
            <ol>12. Keep depression at bay</ol>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={10} md={8}>
          <p className="pb-3">
            <span className="text-gold">FACT:</span> According to these same
            research studies, adults who enjoy a 15-minute session on a massage
            chair twice a week every week for five consecutive weeks experienced
            an increase in delta waves and a decrease in beta waves.
          </p>
        </Col>
        <Col xs={12} sm={10} md={8}>
          <p className="pb-0">
            Delta waves are the deep sleep waves while alpha waves are the
            waking and reasoning waves. Massage chair therapy helped the adults
            fall into either a deep relaxation state or a light sleeping state
            while decreasing conscious anxiety.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default ProductBenefits;

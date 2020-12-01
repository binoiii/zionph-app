import React from "react";
import Fade from "react-reveal/Fade";

const Heading = ({ title }) => (
  <section>
    <Fade top duration={1000}>
      <div className="heading bg-primary d-flex align-items-center justify-content-end">
        <h4 className="mb-0 mr-4 font-secondary text-white font-weight-medium">
          {title}
        </h4>
      </div>
    </Fade>
  </section>
);

export default Heading;

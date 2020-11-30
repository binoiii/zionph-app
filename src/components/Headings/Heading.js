import React from "react";
import Fade from "react-reveal/Fade";
import ImageHeading from "../Images/ImageHeading";

const Heading = ({ title }) => (
  <section>
    <Fade top duration={1000}>
      <ImageHeading>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <h4 className="mb-0 font-secondary text-white font-weight-medium">
            {title}
          </h4>
        </div>
      </ImageHeading>
    </Fade>
  </section>
);

export default Heading;

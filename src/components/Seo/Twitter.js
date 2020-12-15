import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const Twitter = ({ url, title, description, image }) => {
  return (
    <>
      <Helmet>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:twitter:image" content={image} />
      </Helmet>
    </>
  );
};

export default Twitter;

Twitter.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
};

Twitter.defaultProps = {
  title: "Zion Philippines",
  description: "Every body's soothing haven",
};

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import Fb from "./Fb";

function SEO({ title, lang }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            description
            sub_description
            author
            url
            image
          }
        }
      }
    `
  );

  const {
    defaultTitle,
    description,
    sub_description,
    author,
    url,
    image,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    titleTemplate: `%s | ${defaultTitle}`,
    description: `${description} | ${sub_description}`,
    image: `${url}${image}`,
    author,
  };

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={seo.title}
        titleTemplate={seo.titleTemplate}
      >
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
      </Helmet>
      <Fb title={seo.title} description={seo.description} image={seo.image} />
    </>
  );
}

SEO.defaultProps = {
  title: "",
  lang: `en`,
  meta: [],
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;

import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Carousel } from "react-bootstrap";

const Client = () => {
  const data = useStaticQuery(graphql`
    query {
      clientImagesPlaceHolder: allFile(
        filter: { relativeDirectory: { eq: "clients" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              id
              fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const clientImages = data.clientImagesPlaceHolder.edges;

  return (
    <section className="client mt-5">
      <div className="client-container">
        <Carousel prevIcon={null} nextIcon={null}>
          {clientImages.map(({ node: { childImageSharp, id, name } }) => (
            <Carousel.Item key={id} interval={2000}>
              <Img
                className="client-carousel-img"
                fluid={childImageSharp.fluid}
                alt={name}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Client;

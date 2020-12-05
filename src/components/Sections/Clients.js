import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Clients = () => {
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
              fluid(maxWidth: 300, maxHeight: 400, quality: 100) {
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
      <h4 className="mb-3 text-center text-gold">
        Satisfied Clients Nationwide
      </h4>
      <div className="client-container">
        {clientImages.map(({ node }) => (
          <Img
            className="client-image"
            key={node.id}
            fluid={node.childImageSharp.fluid}
            atl={node.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ClientImage from "./ClientImage";

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
      <div className="client-container d-flex flex-wrap justify-content-center">
        {clientImages.map(({ node }) => (
          <ClientImage key={node.id} image={node} />
        ))}
      </div>
    </section>
  );
};

export default Client;

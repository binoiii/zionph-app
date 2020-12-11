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
              fluid(maxWidth: 500, quality: 100) {
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
        {clientImages.map(({ node }) => (
          <ClientImage key={node.id} image={node} />
        ))}
      </div>
    </section>
  );
};

export default Client;

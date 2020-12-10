import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          sub_description
        }
      }
    }
  `);

  return site.siteMetadata;
};

export default useSiteMetadata;

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require("react");
const { CustomerChat } = require("./src/components/fbmessenger").default;

exports.wrapPageElement = ({ element }) => (
  <React.Fragment>
    {element}
    <CustomerChat />
  </React.Fragment>
);

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/Headings/Heading";

const Faq = () => (
  <Layout>
    <SEO title="FAQ" />
    <Heading title="FAQs" />
    <section>
      <div className="about-mission mt-5">
        <h4 className="text-gold">Mission</h4>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          feugiat magna sed risus suscipit, quis tempus augue facilisis. Mauris
          a porta purus, eget aliquam orci. Morbi gravida tincidunt ex, et
          mollis risus elementum in. Donec gravida suscipit metus eu tincidunt.
          Integer ante tellus, semper ut odio id, sollicitudin vestibulum lorem.
          In ullamcorper eget mi nec porta.
        </p>
      </div>
      <div className="about-vision mt-5">
        <h4 className="text-gold">Vision</h4>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          feugiat magna sed risus suscipit, quis tempus augue facilisis. Mauris
          a porta purus, eget aliquam orci. Morbi gravida tincidunt ex, et
          mollis risus elementum in. Donec gravida suscipit metus eu tincidunt.
          Integer ante tellus, semper ut odio id, sollicitudin vestibulum lorem.
          In ullamcorper eget mi nec porta.
        </p>
      </div>
    </section>
  </Layout>
);

export default Faq;

import * as React from "react";
import Layout from "../components/Layout";

import { graphql } from "gatsby";
import { entryTitle, postedBy, postExcerpt } from "../components/layout.module.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Head from "../components/Head";

const CodePage = ({ data }) => {
  return (
    <Layout>
      <Head name='Code' />
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h3 className={entryTitle}>
            <Link to={`../${node.id}`} className={entryTitle}>{node.frontmatter.title}</Link>
          </h3>
          <p className={postedBy}>Posted by <Link to={node.frontmatter.href}>{node.frontmatter.author}</Link> on {node.frontmatter.date}</p>
          <Link to={`../${node.id}`}>
            {node.frontmatter.hero_image && <GatsbyImage
              image={getImage(node.frontmatter.hero_image)}
              alt={node.frontmatter.hero_image_alt}
            />}
            <h3 className={postExcerpt}>{node.excerpt}</h3>
          </Link>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { section: { eq: "code" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          author
          date(formatString: "MMMM, D YYYY")
          title
          section
          href
        }
        body
      }
    }
  }
`;

export default CodePage;

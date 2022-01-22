import * as React from 'react'
import Layout from '../../components/Layout'
import Head from '../../components/Head'
import { bodyContent, entryTitle, postedBy, postExcerpt} from "../../components/layout.module.css";
import { Link, graphql } from "gatsby";

const MicaPage = ({ data }) => {
  return (
    <Layout>
      <Head name='Mica'/>
      <p className={bodyContent}> <b>Micaela Trombini</b> es artista sonora y educadora. Sus
        experimentaciones se desarrollan en el campo de la botánica, 
        la programación y la bioinformación.</p>
      <section>
        <h1 style={{color: '#ff2851'}}>All posts</h1>
        {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h3 className={entryTitle}>
            <Link to={`../../${node.id}`} className={entryTitle}>{node.frontmatter.title}</Link>
          </h3>
          <p className={postedBy}>Posted on {node.frontmatter.date}</p>
          <h3 className={postExcerpt}>{node.excerpt}</h3>
        </article>
      ))}  
      </section>
    </ Layout>
  )
}

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {author: {eq: "@micaelatrombini"}}},sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          date(formatString:"MMMM, D YYYY")
          title
          section
        }
        excerpt
        slug
      }
    }
  }
`;

export default MicaPage

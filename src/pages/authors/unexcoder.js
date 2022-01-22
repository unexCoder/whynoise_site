import * as React from 'react'
import Layout from '../../components/Layout'
import Head from '../../components/Head'
import { bodyContent, entryTitle, postedBy, postExcerpt} from "../../components/layout.module.css";
import { Link, graphql } from "gatsby";

const UnexPage = ({ data }) => {
    return (
      <Layout>
        <Head name='\unexCoder'/>
        <p className={bodyContent}><b>Luis Tamagnini</b> Músico, artista visual, programador y docente. Desde 2005 trabaja activamente en la investigación, la enseñanza y el fomento de lenguajes de programación de código abierto orientados tanto a la computación musical como a la computación gráfica y los medios audiovisuales en tiempo real.</p>
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
    allMdx(filter: {frontmatter: {author: {eq: "@unexcoder"}}},sort: {fields: frontmatter___date, order: DESC}) {
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

export default UnexPage

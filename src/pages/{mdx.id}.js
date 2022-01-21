import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { entryTitle, postedBy, bodyContent } from "../components/layout.module.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Head from "../components/Head";

const NoisePost = ({data}) => {
    
    const img = getImage(data.mdx.frontmatter.hero_image)
    let title = data.mdx.frontmatter.section
    title = title.charAt(0).toUpperCase() + title.slice(1)

    return (
        <Layout>
            <Head name={title} />
            <article key={data.mdx.id}>
                <h3  className={entryTitle}>
                    {data.mdx.frontmatter.title}
                </h3>
                <p className={postedBy}>Posted by <Link to={data.mdx.frontmatter.href}>{data.mdx.frontmatter.author}</Link> on {data.mdx.frontmatter.date}</p>
                <GatsbyImage
                    image={img}
                    alt={data.mdx.frontmatter.hero_image_alt}
                />
                <p className={postedBy}>{data.mdx.frontmatter.hero_image_alt} | Photo: {data.mdx.frontmatter.hero_image_credit_text}</p>
                <div className={bodyContent}>
                    <MDXRenderer>
                        {data.mdx.body}
                    </MDXRenderer>
                </div>
            </article>
        </ Layout>
    )
};

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
        frontmatter {
            title
            author
            date(formatString: "MMMM, D YYYY")
            section
            href
            hero_image_alt
            hero_image_credit_link
            hero_image_credit_text
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
        }
        body
        }
    }
`

export default NoisePost;

import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export default function Head(props) {
      
    const data = useStaticQuery(graphql`
        query Metadata {
            site {
                siteMetadata {
                    copyright
                    description
                    title
                    keywords
                }
            }
        }       
    `)
    
    const title = props.name !== undefined ? data.site.siteMetadata.title + ' | ' + props.name : data.site.siteMetadata.title
    const keys = data.site.siteMetadata.keywords
    const description = data.site.siteMetadata.description
    const copy = data.site.siteMetadata.copyright

    return (
        <Helmet>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="keywords" content={keys} />
            <meta name="descriptionb" content={description} />
            <meta name="author" content={copy} />
        </Helmet>  
    ) 
}

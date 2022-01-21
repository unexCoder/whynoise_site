import React from 'react';
import { Link } from 'gatsby'
import { useStaticQuery, graphql} from 'gatsby'
import {mainTitle, mainSubtitle, mainTitleLink} from './layout.module.css'

export default function Header() {

    // grapql query data
    const data = useStaticQuery(graphql`
        query {
            site {
                id
                siteMetadata {
                    description
                    title
                }
            }
        }`
    )
    return (
        <div>
            <header>
                <Link to='/' className={mainTitleLink}>
                    <h1 className={mainTitle}>{data.site.siteMetadata.title}</h1>
                </Link>
                <h3 className={mainSubtitle}>{data.site.siteMetadata.description}</h3>
            </header>
        </div>
    )
}

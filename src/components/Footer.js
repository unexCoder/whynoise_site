import React from 'react';
import { useStaticQuery, graphql} from 'gatsby'
import {mainFooter} from './layout.module.css'

export default function Footer() {

    // grapql query data
    const data = useStaticQuery(graphql`
        query {
            site {
                id
                siteMetadata {
                    copyright
                }
            }
        }`
    )
    
    return (
        <div>
            <footer className={mainFooter} >© 2022 | whynoise.com.ar</footer>
            {/* <footer className={mainFooter} >{data.site.siteMetadata.copyright}</footer> */}
        </div>
    )
}

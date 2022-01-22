import * as React from 'react'
import Layout from '../components/Layout'

import Head from '../components/Head'
import { bodyContent} from "../components/layout.module.css";
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
      <Layout>
        <Head name='About' />
        <div className={bodyContent}>
          <p>why?noise is a site and web app intended to publish
            political and cultural content about noise. It is curated 
            and developed by 
            <Link to='../authors/mica'><b> Micaela Trombini</b></Link> and 
            <Link to='../authors/unexcoder'> <b>Luigi Tamagnini</b></Link>.
          </p>
          <p>All the content on this site is free to be copied and shared.</p>            
        </div>
      </ Layout>
    )
}

export default AboutPage

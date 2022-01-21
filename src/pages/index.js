import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Head from "../components/Head"

// markup
const IndexPage = () => {

  return (
    <Layout>
      <Head />
      <StaticImage src="../images/code.jpg" alt="noise"/>
    </ Layout>
  )
}

export default IndexPage

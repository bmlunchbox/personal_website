import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="section about-section">about</h1>
    
    <h1 className="section timeline-section">timeline</h1>
    <h1 className="section projects-section">projects</h1>
    <h1 className="section readings-section">readings</h1>
  </Layout>
)

export default IndexPage

import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import About from "../components/about"
import Timeline from "../components/timeline"
import Projects from "../components/projects"
import Readings from "../components/readings"
import Cats from "../components/cats"

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Timeline />
    <Projects />
    <Readings />
    <Cats />
  </Layout>
)

export default IndexPage

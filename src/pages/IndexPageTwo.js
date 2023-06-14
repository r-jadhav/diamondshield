import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import HomeMain from "../components/home"

const IndexPageTwo = () => (
  <Layout>
    <HomeMain />
  </Layout>
)

export default IndexPageTwo

export const Head = () => (
  <Seo />
)
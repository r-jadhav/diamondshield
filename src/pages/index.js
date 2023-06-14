import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import HomeTwoMain from "../components/homeTwo"

const IndexPage = () => (
  <Layout>
    <HomeTwoMain />
  </Layout>
)

export default IndexPage

export const Head = () => (
  <Seo />
)
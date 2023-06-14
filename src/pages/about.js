import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import AboutMain from "../components/about"

const IndexPage = () => (
    <Layout>
        <AboutMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
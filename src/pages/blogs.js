import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import BlogMain from "../components/blog"

const IndexPage = () => (
    <Layout>
        <BlogMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
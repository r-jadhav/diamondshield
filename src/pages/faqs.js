import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import FaqsMain from "../components/Faq"

const IndexPage = () => (
    <Layout>
        <FaqsMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
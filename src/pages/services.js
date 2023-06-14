import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ServicesMain from "../components/services"

const IndexPage = () => (
    <Layout>
        <ServicesMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
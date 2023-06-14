import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ServiceDetailsMain from "../components/serviceDetails"

const IndexPage = () => (
    <Layout>
        <ServiceDetailsMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
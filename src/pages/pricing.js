import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import PricingMain from "../components/pricing"

const IndexPage = () => (
    <Layout>
        <PricingMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
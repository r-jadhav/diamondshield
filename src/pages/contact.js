import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ContactMain from "../components/contact"

const IndexPage = () => (
    <Layout>
        <ContactMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
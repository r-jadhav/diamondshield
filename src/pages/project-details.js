import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ProjectDetailsMain from "../components/projectDetails"

const IndexPage = () => (
    <Layout>
        <ProjectDetailsMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
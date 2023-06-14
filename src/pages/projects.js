import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ProjectsMain from "../components/project"

const IndexPage = () => (
    <Layout>
        <ProjectsMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
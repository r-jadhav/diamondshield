import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import TeamMain from "../components/team"

const IndexPage = () => (
    <Layout>
        <TeamMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
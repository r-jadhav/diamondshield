import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import SignUpPageMain from "../components/signUp"

const IndexPage = () => (
    <Layout>
        <SignUpPageMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
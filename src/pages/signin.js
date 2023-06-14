import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import SignInPageMain from "../components/signIn"

const IndexPage = () => (
    <Layout>
        <SignInPageMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
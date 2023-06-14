import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ForgotPasswordPageMain from "../components/forgotPassword"

const IndexPage = () => (
    <Layout>
        <ForgotPasswordPageMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import PromoSection from "../components/index/promo";
import SkillsSection from "../components/index/skills";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PromoSection/>
    <SkillsSection/>
  </Layout>
)

export default IndexPage

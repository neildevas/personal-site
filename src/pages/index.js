import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../sections/Hero"
import Spacer from "../components/Spacer"
import About from "../sections/About"
import Experiences from "../sections/Experiences"
import Projects from "../sections/Projects"
import Social from "../sections/Social"

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection/>
      <Spacer size={32} />
      <About/>
      <Spacer size={32} />
      <Experiences/>
      <Spacer size={32} />
      <Projects/>
      <Spacer size={32} />
      <Social />
    </Layout>
  )
}

export default IndexPage

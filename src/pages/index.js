import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../sections/Hero"
import Spacer from "../components/Spacer"
import Experiences from "../sections/Experiences"
import Projects from "../sections/Projects"
import Social from "../sections/Social"
import { AboutMe, AboutWork, Books } from "../sections/About"

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <HeroSection/>
      <Spacer size={32} />
      <AboutMe />
      <Spacer size={32} />
      <AboutWork />
      <Spacer size={32} />
      <Books />
      <Spacer size={32} />
      <Experiences/>
      <Spacer size={16} />
      <Projects/>
      <Spacer size={16} />
      <Social />
    </Layout>
  )
}

export default IndexPage

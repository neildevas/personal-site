import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/HeroImage"
import SEO from "../components/seo"
import ProjectPreview from "../components/projectPreview"
import HeroSection from "../sections/Hero"
import Spacer from "../components/Spacer"
import About from "../sections/About"
import Experiences from "../sections/Experiences"
import Projects from "../sections/Projects"
import Social from "../sections/Social"

const IndexPage = () => {
  const data = useStaticQuery(graphql`{
      allProjectsJson {
          edges {
              node {
                  title
                  backgroundColor
                  textColor
                  slug
                  image {
                      childImageSharp {
                          fluid {
                              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
          }
      }
  }
  `)
  const projects = data.allProjectsJson.edges;
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

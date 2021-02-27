import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import HeroSection from "../sections/HeroSection"
import Header from "./header"
import About from '../sections/About'
import Employment from "../sections/Employment"
import Spacer from "./Spacer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div class={'mx-auto max-w-6xl px-2 pb-40'}>
        <HeroSection/>
        <Spacer size={32} />
        <About/>
        <Spacer size={32} />
        <Employment/>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

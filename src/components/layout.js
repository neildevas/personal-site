import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import HeroSection from "./HeroSection"
import Header from "./header"
// import "./layout.css"

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
    <div class="bg-gray-100">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div class={'mx-auto max-w-full lg:max-w-4xl pt-0 px-2'}>
        <HeroSection/>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

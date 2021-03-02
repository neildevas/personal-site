import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
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
    <div className={'w-screen'}>
      <div className={'w-full bg-black'}>
        <div className={'mx-auto max-w-6xl px-4 md:px-8 pb-40'}>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

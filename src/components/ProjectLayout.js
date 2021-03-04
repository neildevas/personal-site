import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const ProjectLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
      query Something {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  return (
    <div className={'w-screen'}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
      <main>{children}</main>
    </div>
  )
}

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectLayout

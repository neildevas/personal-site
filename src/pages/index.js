import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectPreview from "../components/projectPreview"

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
      {projects.map(({ node: project }) => {
        const title = project.title;
        const backgroundColor = project.backgroundColor;
        const textColor = project.textColor;
        const slug = project.slug;
        const imageData = project.image?.childImageSharp.fluid;

        return (
          <ProjectPreview
            title={title}
            backgroundColor={backgroundColor}
            textColor={textColor}
            slug={slug}
            imageData={imageData}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage

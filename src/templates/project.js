import React from 'react'
import { graphql } from "gatsby";
import Layout from "../components/layout"
import ProjectHero from "../components/Project/Hero"
import ProjectLayout from "../components/ProjectLayout"
import Spacer from "../components/Spacer"
import Highlights from "../components/Project/Highlights"
import Tools from "../components/Project/Tools"

export const query = graphql`
    query MyQuery($slug: String!, $shouldGrayscaleImage: Boolean!) {
        projectsJson(slug: {eq: $slug}) {
            title
            url
            description
            websiteLink
            appStoreLink
            playStoreLink
            githubLink
            highlights
            tools
            buttonColor
            heroImageIsFluid
            heroImage {
                childImageSharp {
                    fixed(height:500, grayscale: $shouldGrayscaleImage) {
                        ...GatsbyImageSharpFixed
                    }
                    fluid(maxHeight:500, maxWidth:500, grayscale: $shouldGrayscaleImage) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }

`
const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  return (
    <Layout>
      <ProjectHero {...project} />
      <Spacer size={32} />
      <Highlights highlights={project.highlights} />
      <Spacer size={16} isSectionSpacer={false} />
      <Tools tools={project.tools} />
    </Layout>
  )
}

export default ProjectTemplate;
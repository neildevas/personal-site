import React from 'react'
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Project from "../components/Project"
import ProjectLayout from "../components/ProjectLayout"

export const query = graphql`
    query MyQuery($slug: String!) {
        projectsJson(slug: {eq: $slug}) {
            title
            url
            description
            websiteLink
            appStoreLink
            playStoreLink
            githubLink
            image {
                publicURL
            }
        }
    }

`
const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  return (
    <ProjectLayout>
      <Project {...project} />
    </ProjectLayout>
  )
}

export default ProjectTemplate;
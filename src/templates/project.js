import React from 'react'
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Project from "../components/project"

export const query = graphql`
    query MyQuery($slug: String!) {
        projectsJson(slug: {eq: $slug}) {
            title
            url
#            image {
#                childImageSharp {
#                    fluid {
#                        ...GatsbyImageSharpFluid
#                    }
#                }
#            }
        }
    }

`
const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  return (
    <Layout>
      {/*<Project {...project} />*/}
    </Layout>
  )
}

export default ProjectTemplate;
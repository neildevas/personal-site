import React from 'react';
import Img from "gatsby-image"
import Spacer from "../components/Spacer"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Employment = () => {
  const data = useStaticQuery(graphql`
      query {
          allProjectsJson {
              edges {
                  node {
                      id
                      title
                      textColor
                      backgroundColor
                      shouldConstrainLogo
                      slug
                      image {
                          publicURL
                      }
                      backgroundImage {
                          childImageSharp {
                              fluid {
                                  ...GatsbyImageSharpFluid
                              }
                          }
                      }
                  }
              }
          }
      }
  `);

  return (
    <div>
      <div className={'full-width-section'}>
        <div className={'section-header'}>
          <h2>Projects & Work</h2>
        </div>
        <Spacer isSectionSpacer={false} size={12} />
        <div class={'max-w-4xl mx-auto'}>
          <div className={'grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5'}>
            {data.allProjectsJson.edges.map(({ node }) => (
              <ProjectCard {...node} key={node.id} logoUrl={node.image?.publicURL}/>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Employment;

const ProjectCard = ({ backgroundColor, slug, textColor, title, logoUrl, shouldConstrainLogo, backgroundImage }) => {
  const imgStyle = { // TODO - not sustainable. Figure out a better solution with GraphQL
    overflow: "hidden",
    maxWidth: 200,
    ...(shouldConstrainLogo ? { width: '50%', maxWidth: 150 } : {})
  }
  return (
    <Link to={`/projects/${slug}`}>
      <div class={'project-card'} style={{ backgroundColor }}>
        <div class={'flex-1 flex justify-center align-center'}>
          <img src={logoUrl} style={imgStyle}/>
        </div>
        <h4 style={{ color: textColor }}>{title}</h4>
      </div>
    </Link>
  )
}

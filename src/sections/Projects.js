import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Experience from "../components/Experience"

const Employment = () => {
  const data = useStaticQuery(graphql`
      query {
          projects: allProjectsJson {
                  nodes {
                      id
                      title
                      textColor
                      backgroundColor
                      slug
                      eventName
                      summary
                      tech_stack
                      responsibilities
                      date
                      image {
                          publicURL
                      }
                      highlights
                      cardBackgroundImage {
                          childImageSharp {
                              fluid(quality:100) {
                                  ...GatsbyImageSharpFluid
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
          <h2>Projects</h2>
        </div>
        <div className="w-full mx-auto flex flex-col mt-8">
          {data.projects.nodes.map((project, index) => (
            <div key={project.id} className={index !== 0 ? 'mt-8' : null}>
              <Experience
                eventName={project.eventName}
                company={project.title}
                date={project.date}
                summary={project.summary}
                tech_stack={project.tech_stack}
                responsibilities={project.responsibilities}
                highlights={project.highlights}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Employment;

const ProjectCard = ({ backgroundColor, slug, textColor, title, logoUrl, shouldConstrainLogo, cardBackgroundImage }) => {
  const imgStyle = { // TODO - not sustainable. Figure out a better solution with GraphQL
    overflow: "hidden",
    maxWidth: 200,
    ...(shouldConstrainLogo ? { width: '50%', maxWidth: 150 } : {})
  }
  const renderComponent = () => {
    if (cardBackgroundImage) {
      return (
        <BackgroundImage fluid={cardBackgroundImage.childImageSharp.fluid} className={'project-card relative'} style={{ overflow: 'hidden'}}>
          <div class={'card-background-gradient absolute inset-0'} />
            <div className={'flex-1'}/>
            <h4 style={{ color: textColor }} className={'text-center z-10'}>{title}</h4>
        </BackgroundImage>
      )
    }
    return (
      <div className={'project-card'} style={{ backgroundColor }}>
        <div className={'flex-1 flex justify-center align-center'}>
          <img src={logoUrl} style={imgStyle}/>
        </div>
        <h4 style={{ color: textColor }} className={'text-center'}>{title}</h4>
      </div>
    )
  }

  return (
    <Link to={`/projects/${slug}`} class={'flex justify-center'}>
      {renderComponent()}
    </Link>
  )
}

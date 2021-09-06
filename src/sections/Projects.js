import React from 'react';
import Img from "gatsby-image"
import Spacer from "../components/Spacer"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

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
      }
  `);
  return (
    <div>
      <div className={'full-width-section'}>
        <div className={'section-header'}>
          <h2 class={'pb-12'}>Projects</h2>
        </div>
        <div class={'max-w-4xl mx-auto'}>
          <div className={'grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-5'}>
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

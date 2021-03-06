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
          <h2 class={'pb-12'}>Projects & Work</h2>
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
  const getImageComponent = () => {
    if (cardBackgroundImage) {
      console.log('RETURNNING CARD BACKGROUDN IMAGE', cardBackgroundImage)
      return (
        <BackgroundImage fluid={cardBackgroundImage.childImageSharp.fluid} />
      )
    } else if (logoUrl) {
      return <img src={logoUrl} style={imgStyle}/>
    }
    return null;
  }
  if (cardBackgroundImage) {
    return (
      <Link to={`/projects/${slug}`} class={'flex justify-center'}>
        <BackgroundImage fluid={cardBackgroundImage.childImageSharp.fluid} className={'project-card'} style={{ overflow: 'hidden'}}>
          <div class={'flex-1 flex justify-center align-center'}>
            {getImageComponent()}
          </div>
          <h4 style={{ color: textColor }} class={'text-center'}>{title}</h4>
        </BackgroundImage>
      </Link>
    )
  }
  return (
    <Link to={`/projects/${slug}`} class={'flex justify-center'}>
      <div class={'project-card'} style={{ backgroundColor }}>
        <div class={'flex-1 flex justify-center align-center'}>
          <img src={logoUrl} style={imgStyle}/>
        </div>
        <h4 style={{ color: textColor }} class={'text-center'}>{title}</h4>
      </div>
    </Link>
  )
}

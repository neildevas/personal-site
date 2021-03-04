import React from 'react';
import Image from "../components/HeroImage"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
      query {
          image: file(relativePath:{eq:"about-me-image.JPEG"}) {
              id
              childImageSharp {
                  fluid(maxHeight:500, maxWidth:500) {
                      ...GatsbyImageSharpFluid
                  }
                  fixed(height:500) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
      }
  `)
  return (
    <div>
      <div className={'grid md:grid-cols-2'}>
        <div className={'section-header'}>
          <h2>Who am I</h2>
          <p className={'subheading'}>My name is Neil. I grew up on Long Island, New York, and graduated from McGill University with a degree in Computer Science in 2019.
            Currently, I work as a software engineer at Zillow Group. Most of my free time is spent trying to figure out how to start a business.
          </p>
        </div>
        <div className={'mt-8 md:mt-0 max-w-full mx-auto'}>
          <Img
            fixed={data.image.childImageSharp.fixed}
            objectFit={'cover'}
            // objectPosition="50% 50%"
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  )
}

export default About;
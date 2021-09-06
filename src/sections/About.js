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
                  fluid(maxHeight:500, quality:100) {
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
          <p className={'subheading'}>
            I am a software engineer with two years of experience working in the real-estate industry.
            My experience working both at a fast-paced startup and at a large company have helped shape the way I write and deliver software.
            I understand the need to ship code fast while maintaining high quality and scalability.
            Among my results I could refer to the three mobile apps and two web apps developed at Keyo, two of which were acquired by Zillow in October 2020,
            or the project I lead to implement an integration testing framework currently used in production for streeteasy.com.
          </p>
        </div>
        <div className={'mt-8 md:mt-0 max-w-none md:max-w-half-screen md:pl-12'} style={{ height: '100%', maxHeight: 500 }}>
          <Img
            fluid={data.image.childImageSharp.fluid}
            objectFit={'contain'}
            style={{ maxHeight: "100%"}}
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  )
}

export default About;

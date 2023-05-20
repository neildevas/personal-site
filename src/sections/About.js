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
        <div className={"flex flex-col justify-center"}>
          <div className={'section-header'}>
            <h2>About my work</h2>
            <p className={'subheading'}>
              I am a full-stack software engineer with four years of professional experience working in the real-estate and financial sectors. I am looking to join a small team in an industry that I am interested in and where I will be able to write a lot of code and be able to contribute to product decisions.
            </p>
          </div>
          <br /><br />
          <div className={'section-header'}>
            <h2>About me</h2>
            <p className={'subheading'}>
              I love to read, travel, walk around, and engage in physical activity. Currently I am a blue belt in Brazilian Jiu Jitsu at Renzo Gracie UWS Academy in New York City.
            </p>
          </div>
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

// My experiences working both at a fast-paced startup and at a large company have helped shape the way I write and deliver software.
//   I understand how to balance between the needs of shipping code fast and maintaining quality, readability, and scalability. I genuinely love writing code and firmly believe in its ability to solve problems and move our society forward. My ultimate goal is to be an entrepreneur and create products that help people in any sort of capacity.
// <br /><br />
// Outside of work, I love to read, travel, hang out in cafés, and do anything physical, including weight-lifting, running, playing Spikeball, and learning Brazilian Jiu-Jitsu.

export default About;

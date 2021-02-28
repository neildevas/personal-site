import React from 'react';
import Image from "../components/HeroImage"
import Img from "gatsby-image"
import Spacer from "../components/Spacer"
import { graphql, useStaticQuery } from "gatsby"

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
                  }
              }
          }
      }
  `);
  return (
    <div>
      <div className={'w-full max-w-6xl mx-auto'}>
        <div className={'section-header'}>
          <h2>Projects & Work</h2>
        </div>
        <Spacer isSectionSpacer={false} size={12} />
      </div>
    </div>
  )
}

export default Employment;
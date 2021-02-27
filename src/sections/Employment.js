import React from 'react';
import Image from "../components/image"
import Img from "gatsby-image"
import WorkExperiences from "../components/WorkExperiences"
import Spacer from "../components/Spacer"
import { graphql, useStaticQuery } from "gatsby"

const Employment = () => {
  const data = useStaticQuery(graphql`
      query {
          allExperiencesJson {
              nodes {
                  id
                  location
                  company
                  eventName
                  date
              }
          }
      }
  `);
  const numExperiences = data.allExperiencesJson?.nodes?.length || 0;
  console.log("NUM EXPERIENCES", numExperiences);
  return (
    <div>
      <div className={'w-full max-w-6xl mx-auto'}>
        <div className={'section-header'}>
          <h1 className={'heading-1 text-3xl md:text-4xl'}>Experiences</h1>
          <p className={'subheading'}>via this cool timeline thing</p>

        </div>
        <Spacer isSectionSpacer={false} size={12} />
        <WorkExperiences/>
      </div>
    </div>
  )
}

export default Employment;
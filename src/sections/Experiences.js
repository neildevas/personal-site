import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Experience from "../components/Experience"

const Experiences = () => {
  const data = useStaticQuery(graphql`
      query {
          experiences: allExperiencesJson {
              nodes {
                  id
                  location
                  company
                  eventName
                  date
                  summary
                  tech_stack
                  responsibilities
                  rank
              }
          }
      }
  `);
  const numExperiences = data.experiences?.nodes?.length;
  if (!numExperiences) return null;
  return (
    <div>
      <div className={'full-width-section'}>
        <div className={'section-header'}>
          <h2>Experiences</h2>
        </div>
        <div className="w-full mx-auto flex flex-col mt-8">
          {data.experiences.nodes.sort((a, b) => a.rank - b.rank).map((experience, index) => (
            <div key={experience.id} className={index !== 0 ? 'mt-8' : null}>
              <Experience
                key={experience.id}
                {...experience}
              />
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences;

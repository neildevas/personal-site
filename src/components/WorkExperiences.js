import React, { useState } from 'react'
import { graphql, useStaticQuery } from "gatsby"

const WorkExperiences = () => {
  const data = useStaticQuery(graphql`
      query {
          experiences: allExperiencesJson {
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
  const numExperiences = data.experiences?.nodes?.length;
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  if (!numExperiences) return null;
  return (
    <div className="w-full py-12 mx-auto flex flex-col items-center">
      <Experience {...data.experiences.nodes[selectedExperienceIndex]} />
      <div className={'mt-32'}>
        {new Array(numExperiences).fill(null).map((it, idx) => (
          <CircleButton
            key={`circle-${idx}`}
            isFilled={idx === selectedExperienceIndex}
            onClick={() => { setSelectedExperienceIndex(idx) }}
          />
        ))}
      </div>
    </div>
  )
}

const CircleButton = ({ isFilled, onClick }) => (
  <button class={'experience-dot'} style={{ backgroundColor: isFilled ? '#004276' : undefined }} onClick={onClick} />
)

const Experience = ({ eventName, company, location, date }) => {
  return (
    <div class={'flex flex-col items-center'}>
      <h3 className={'heading-3 mt-2'}>{eventName}</h3>
      <p className={'text-xl mt-3.5'}>{company}</p>
      <p className={'mt-0.5'}>{location}</p>
      <p className={'mt-0.5'}>{date}</p>
    </div>
  )
}
export default WorkExperiences

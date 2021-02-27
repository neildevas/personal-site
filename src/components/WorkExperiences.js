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
                  image {
                      publicURL
                  }
              }
          }
          locationPin: file(relativePath: {eq: "location-pin.svg"}) {
              id
              publicURL
          }
      }
  `);
  const numExperiences = data.experiences?.nodes?.length;
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  if (!numExperiences) return null;
  const item = data.experiences.nodes[selectedExperienceIndex]
  return (
    <div className="w-full mx-auto flex flex-col items-center">
      <Experience {...item} url={item.image?.publicURL} pinUrl={data.locationPin.publicURL}/>
      <div className={'mt-12'}>
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

const Experience = ({ eventName, company, location, date, url, pinUrl }) => {
  return (
    <div class={'flex flex-col items-center'}>
      {Boolean(url) && <img src={url} style={{ objectFit: 'contain', width: 200, height: 40 }} />}
      <h3 className={'heading-3 mt-8'}>{eventName}</h3>
      <p className={'text-xl mt-2'}>{company}</p>
      <div class={'flex flex-row justify-center'}>
        <img src={pinUrl} alt={'pin'} style={{ marginRight: 8 }} />
        <p className={'mt-0.5'}>{location}</p>
      </div>
      <p className={'mt-0.5'}>{date}</p>
    </div>
  )
}
export default WorkExperiences

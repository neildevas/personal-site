import React, { useState } from "react"
import Spacer from "../components/Spacer"
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
    <div>
      <div className={'w-full max-w-6xl mx-auto'}>
        <div className={'section-header'}>
          <h2>Work History & Experiences</h2>
          <p className={'subheading'}>via this cool timeline thing</p>
        </div>
        <Spacer isSectionSpacer={false} size={12} />
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
      </div>
    </div>
  )
}

const CircleButton = ({ isFilled, onClick }) => (
  <button class={'experience-dot focus:ring-dark-blue focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-1'} style={{ backgroundColor: isFilled ? '#004276' : undefined }} onClick={onClick} />
)

export default Experiences;
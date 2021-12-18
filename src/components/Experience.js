import React from 'react'

const Spacer = () => <div className={'mt-4'} />
const Experience = ({ eventName, company, location, date, summary, tech_stack, responsibilities, highlights }) => {
  return (
    <div className={'flex flex-col'}>
      <h3 className={'heading-4 text-left'}>{company}</h3>
      <div className={'flex flex-row mt-0.5'}>
        <p className={'text-md'}>{eventName}</p>
        {location ? <p className={'mx-2'}> / </p> : null}
        <p>{location}</p>
      </div>
      <p>{date}</p>
      {summary ? <p className={'max-w-2xl mt-4 text-sm'}>{summary}</p> : null}
      <div className={'mt-4 max-w-2xl'}>
        <BoldHeadingWithText heading={'Responsibilities'} text={responsibilities} />
        <Spacer />
        <BoldHeadingWithListText heading={'Highlights'} text={highlights} />
        <Spacer />
        <BoldHeadingWithText heading={'Tech Stack'} text={tech_stack} />
      </div>
    </div>
  )
}

const BoldHeadingWithListText = ({ heading, text }) => (
  <div>
    <p className={'text-sm'}><span className={'font-bold'}>{heading}: </span></p>
    <ul>
      {text.map(text => (
        <p className={'text-sm'}><li>{text}</li></p>
      ))}
    </ul>
  </div>
)

const BoldHeadingWithText = ({ heading, text }) => (
  <div className={'flex flex-row'}>
    <p className={'text-sm'}><span className={'font-bold'}>{heading}: </span>{text}</p>
  </div>
)

export default Experience

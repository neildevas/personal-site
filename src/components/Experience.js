import React from 'react'

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

export default Experience

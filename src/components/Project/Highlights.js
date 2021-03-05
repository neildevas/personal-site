import React from "react"

const Highlights = ({ highlights = [] }) => (
    <div>
      <div className={'project-section-header'}>
        <h3 class={'text-center lg:text-left'}>Highlights</h3>
      </div>
      <ul class={'list-disc mt-4 flex flex-col items-center lg:block'}>
        {highlights.map((item, index) => (
          <li key={index} class={'max-w-prose'}>{item}</li>
        ))}
      </ul>
    </div>
)

export default Highlights;
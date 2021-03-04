import React from "react"

const Highlights = ({ highlights = [] }) => (
  <div>
    <div>
      <div className={'section-header'}>
        <h3 class={'text-center md:text-left'}>Highlights</h3>
      </div>
      <ul class={'list-disc mt-4'}>
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
)

export default Highlights;
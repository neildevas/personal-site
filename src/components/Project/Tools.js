import React from "react"
import COLOR_MAP from "../../utils/colors"

const Tools = ({ tools = [] }) => (
  <div>
    <div>
      <div className={'section-header'}>
        <h3 class={'text-center md:text-left'}>Tools Used</h3>
      </div>
      <div class={'flex flex-row mt-4 flex-wrap justify-center md:justify-start'}>
        {tools.map((item, index) => (
          <div key={index} class={'rounded-2xl px-3 py-2 mr-2 mt-2'} style={{ backgroundColor: COLOR_MAP[item] }}>
            <p className={'text-white font-semibold'}>{item}</p>
          </div>
        ))}
      </div>
      {/*<ul class={'list-disc mt-4'}>*/}
      {/*  {tools.map((item, index) => (*/}
      {/*    <li key={index}>{item}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  </div>
)

export default Tools;
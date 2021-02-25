import React from 'react';
import Image from "../components/image"

const About = () => (
  <div>
    <div className={'grid md:grid-cols-2'}>
      <div className={'section-header'}>
        <h1 className={'heading-1 text-3xl md:text-4xl'}>About me</h1>
        <p className={'subheading'}>My name is Neil. I grew up in Long Island, New York, and graduated from McGill University with a degree in Computer Science in 2019.
          Currently, I work as a software engineer at Zillow Group. Most of my free time is spent trying to figure out how to start a business.
        </p>
      </div>
      <div className={'mt-8 sm:mt-0 max-w-full sm:mx-0'}>
        <Image/>
      </div>
    </div>
  </div>
)

export default About;
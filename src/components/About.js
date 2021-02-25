import React from 'react';
import Image from "./image"

const About = () => (
  <div>
    <div className={'grid md:grid-cols-2'}>
      <div className={'max-w-prose mx-auto sm:flex sm:flex-col sm:justify-center pl-8'}>
        <h1 className={'heading-1 text-3xl md:text-4xl mb-4'}>About me</h1>
        <p>My name is Neil. I grew up in Long Island, New York, and graduated from McGill University with a degree in Computer Science in 2019.
          Currently, I work as a software engineer at Zillow Group. Most of my free time is spent trying to figure out how to start a business.
        </p>
        {/*<p class={'mt-2'}>I grew up in <span class={'font-semibold'}>Long Island, New York</span> </p>*/}
        {/*<p className={'mt-2'}>I graduated from*/}
        {/*  <span className={'font-semibold'}> McGill University </span>*/}
        {/*  in*/}
        {/*  <span className={'font-semibold'}> 2019 </span>*/}
        {/*  with a degree in*/}
        {/*  <span className={'font-semibold'}> computer science </span>*/}
        {/*</p>*/}
        {/*<p className={'mt-2'}>in my free time, I enjoy </p>*/}
      </div>
      <div className={'mt-8 sm:mt-0 max-w-full sm:mx-0'}>
        <Image/>
      </div>
    </div>
  </div>
)

export default About;
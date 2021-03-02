import React from 'react';
import { Link } from "gatsby"
import Image from 'gatsby-image'

const Project = ({ imageData, title, url }) => (
  <div className={'w-full'}>
    <div className={'project-hero-section'}>
      <div className={'mx-auto max-w-6xl px-4 md:px-8 pb-40 h-full'}>
        <h1 className={'text-white'}>{title}</h1>
      </div>
    </div>
  </div>

)

export default Project;
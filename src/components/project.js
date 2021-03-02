import React from 'react';
import { Link } from "gatsby"
import Image from 'gatsby-image'

const Project = ({ imageData, title, url }) => (
  <div className={'w-11/12 bg-black'}>
    <div className={'h-screen w-screen'}>
      <div className={'h-screen'}>
        <h1 className={'text-white'}>{title}</h1>
      </div>
    </div>
  </div>
)

export default Project;
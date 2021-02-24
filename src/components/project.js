import React from 'react';
import { Link } from "gatsby"
import Image from 'gatsby-image'

const Project = ({ imageData, title, url }) => (
  <div className={'project'}>
    <Image fluid={imageData} alt={title} />
    <h1>
      {title}
    </h1>
    <p>
      <Link to={url}>
        View this project online &rarr;
      </Link>
    </p>
    <p>
      <Link to={'/'}>
        &larr; Back to all projects
      </Link>
    </p>
  </div>
)

export default Project;
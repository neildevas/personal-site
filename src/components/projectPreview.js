import React from 'react';
import { Link } from "gatsby"
import Image from 'gatsby-image'

const ProjectPreview = ({ slug, imageData, title, backgroundColor, textColor }) => (
  <div className={'project-preview'} style={{ backgroundColor }}>
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <h2 style={{ color: textColor }}>
      <Link to={`/${slug}/`}>
        {title}
      </Link>
    </h2>
    <Link to={`/${slug}/`}>
      View this project &rarr;
    </Link>
  </div>
)

export default ProjectPreview;

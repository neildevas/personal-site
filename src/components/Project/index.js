import React from 'react';
import { Link } from "gatsby"
import Image from 'gatsby-image'
import ProjectLinkButton from "./ProjectLinkButton"

const Project = ({ title, url, description, websiteLink, appStoreLink, playStoreLink, githubLink }) => (
  <div className={'w-full'}>
    <div className={'project-hero-section'}>
      <div className={'mx-auto max-w-6xl px-4 md:px-8 h-full md:flex md:flex-col md:justify-center'}>
        <div class={'grid md:grid-cols-2 sm:grid-cols-1'}>
          <div>
            <h1 className={'text-white'}>{title}</h1>
            <p className={'text-white font-light mt-6 text-center md:text-left'}>{description}</p>
            <div class={'flex flex-row mt-6'}>
              {[websiteLink, githubLink, appStoreLink, playStoreLink].map(link => {
                if (!link) return null;
                return <ProjectLinkButton link={link} key={link} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Project;
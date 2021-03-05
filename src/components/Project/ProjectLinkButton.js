import React from "react"
import githubIcon from '../../images/logos/social/github-white.svg';
import appStoreButton from '../../images/app-store-button.svg';
import googlePlayButton from '../../images/google-2.svg';

const ProjectLinkButton = ({ link }) => (
  <a href={link} target='_blank' class={'w-32 github-button rounded-lg h-10 flex items-center justify-center mr-4'}>
    button
  </a>
)

export const GithubButton = ({ link }) => (
  <a href={link} target='_blank'  className={'project-link-button github-button'}>
    <img src={githubIcon} alt={'github'} style={{ width: 30, height: 30 }} class={'mr-2'}/>
    <p class={'font-medium'}>View on GitHub</p>
  </a>
)

export const AppStoreButton = ({ link }) => (
  <a href={link} target='_blank' className={'project-link-button'} style={{ padding: 0 }}>
    <img src={appStoreButton} style={{ width: '100%', height: "100%", objectFit: 'contain' }}/>
  </a>
)

export const WebsiteButton = ({ link, color }) => (
  <a href={link} target='_blank' className={'project-link-button bg-transparent shadow-lg'} style={{ border: `2px solid ${color}` }}>
    <p style={{ color }} class={'font-medium text-base md:text-sm lg:text-base'}>View Website</p>
  </a>
)

export const GooglePlayButton = ({ link }) => (
  <a href={link} target='_blank' className={'project-link-button bg-transparent px-0'} style={{ border: 'none' }}>
    <img src={googlePlayButton} style={{ width: '100%', height: "100%", objectFit: 'contain' }} />
  </a>
)

export default ProjectLinkButton
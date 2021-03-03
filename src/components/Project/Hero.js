import React from 'react';
import { Link } from "gatsby"
import Image from 'gatsby-image'
import ProjectLinkButton from "./ProjectLinkButton"
import { GithubButton, WebsiteButton, AppStoreButton, GooglePlayButton } from "./ProjectLinkButton"

const Project = ({ title,
  url,
  description,
  websiteLink,
  appStoreLink,
  playStoreLink,
  githubLink,
  buttonColor
}) => {
  const buttonLinks = [{
    type: 'website',
    link: websiteLink,
  }, {
    type: 'github',
    link: githubLink
  }, {
    type: 'appStore',
    link: appStoreLink,
  }, {
    type: 'playStore',
    link: playStoreLink
  }];
  const renderButton = ({ type, link }) => {
    if (type === 'github') {
      return <GithubButton link={link}/>
    }
    if (type === 'website') {
      return <WebsiteButton link={link} color={buttonColor}/>
    }
    if (type === 'appStore') {
      return <AppStoreButton link={link}/>
    }
    if (type === 'playStore') {
      return <GooglePlayButton link={link}/>
    }
    return null;
  }
  return (
    <div className={'w-full'}>
      <div className={'project-hero-section'}>
        <div className={'h-full md:flex md:flex-col md:justify-center'}>
          <div>
            <div className={'md:pt-8'}>
              <h1>{title}</h1>
              <p className={'mt-4 text-center md:text-left'}>{description}</p>
              <div class={'flex flex-row mt-8 justify-center md:justify-start'}>
                {buttonLinks.map(({ type, link }) => {
                  if (!link) return null;
                  return renderButton({ type, link })
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
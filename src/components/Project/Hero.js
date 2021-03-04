import React from 'react';
import { Link } from "gatsby"
import Img from 'gatsby-image'
import ProjectLinkButton from "./ProjectLinkButton"
import { GithubButton, WebsiteButton, AppStoreButton, GooglePlayButton } from "./ProjectLinkButton"

const ProjectHero = ({ title,
  url,
  description,
  websiteLink,
  appStoreLink,
  playStoreLink,
  githubLink,
  buttonColor,
  heroImage,
}) => {
  console.log("HERO IMAGE", heroImage);
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
      return <GithubButton link={link} key={type} />
    }
    if (type === 'website') {
      return <WebsiteButton link={link} color={buttonColor} key={type} />
    }
    if (type === 'appStore') {
      return <AppStoreButton link={link} key={type} />
    }
    if (type === 'playStore') {
      return <GooglePlayButton link={link} key={type} />
    }
    return null;
  }
  return (
    <div className={'w-full'}>
      <div className={'w-full grid md:grid-cols-2'}>
        <div className={'h-full md:flex md:flex-col md:justify-center'}>
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
        <div>
          <div className={'mx-auto rounded-full justify-center items-center mt-8 md:mt-0'} style={{ backgroundColor: buttonColor, maxWidth: '70vw' }}>
            {Boolean(heroImage) && <Img fluid={heroImage.childImageSharp.fluid} objectFit={'cover'} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectHero;
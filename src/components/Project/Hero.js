import React from 'react';
import { Link } from "gatsby"
import Img from 'gatsby-image'
import clsx from 'clsx';
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
  heroImageIsFluid
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
  const getImage = () => {
    if (!heroImage) return null;
    if (heroImageIsFluid) {
      return <Img fluid={heroImage.childImageSharp.fluid} objectFit={'contain'} />
    }
    return <Img fixed={heroImage.childImageSharp.fixed} objectFit={'contain'} />
  }
  return (
    <div className={'w-full'}>
      <div className={'w-full grid md:grid-cols-2'}>
        <div className={'h-full md:flex md:flex-col md:justify-center'}>
          <div className={'md:pt-8'}>
            <h1>{title}</h1>
            <p className={'mt-4 text-center md:text-left'}>{description}</p>
            <div class={'flex flex-row mt-6 justify-center md:justify-start flex-wrap'}>
              {buttonLinks.map(({ type, link }) => {
                if (!link) return null;
                return renderButton({ type, link })
              })}
            </div>
          </div>
        </div>
        <div>
          <div className={clsx('mx-auto rounded-full mt-8 md:mt-0', !heroImageIsFluid && 'flex justify-center items-center')}
           style={{ backgroundColor: buttonColor, maxWidth: '70vw' }}
          >
            {getImage()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectHero;
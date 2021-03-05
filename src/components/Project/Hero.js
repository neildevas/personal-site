import React from 'react';
import Img from 'gatsby-image'
import clsx from 'clsx';
import { GithubButton, WebsiteButton, AppStoreButton, GooglePlayButton } from "./ProjectLinkButton"

const ProjectHero = ({ title,
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
    return <Img fixed={heroImage.childImageSharp.fixed} objectFit={'contain'} imgStyle={{ objectFit: 'contain', width: 500 }}/>
  }
  return (
    <div>
      <div className={'grid lg:grid-cols-2'}>
        <div className={'h-full lg:flex lg:flex-col lg:justify-center'}>
          <div className={'lg:pt-8'}>
            <h1 class={'text-center lg:text-left'}>{title}</h1>
            <p className={'mt-4 text-center lg:text-left'}>{description}</p>
            <div class={'flex flex-row mt-6 justify-center lg:justify-start flex-wrap'}>
              {buttonLinks.map(({ type, link }) => {
                if (!link) return null;
                return renderButton({ type, link })
              })}
            </div>
          </div>
        </div>
        {/*<div>*/}
          <div className={clsx('mx-auto mt-8 lg:mt-0 relative', !heroImageIsFluid && 'flex justify-center items-center')} style={{ maxWidth: '90vw' }}>
            <div class={'hero-circle'} style={{ background: buttonColor }} />
            {getImage()}
          </div>
        {/*</div>*/}
      </div>
    </div>
  )
}

export default ProjectHero;
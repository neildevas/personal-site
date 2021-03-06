import React from 'react';
import Spacer from "../components/Spacer"
import { graphql, useStaticQuery } from "gatsby"

const Social = () => {
  const data = useStaticQuery(graphql`
      query {
          social: allSocialJson {
              edges {
                  node {
                      label
                      username
                      link
                      icon {
                          publicURL
                      }
                  }
              }
          }
      }

  `);

  return (
    <div>
      <div className={'full-width-section'}>
        <div className={'section-header'}>
          <h2 class={'pb-12'}>Social</h2>
        </div>
        <div className={'grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-5'}>
          {data.social.edges.map(({ node }) => (
            <SocialItem {...node} key={node.id} iconUrl={node.icon.publicURL} />
          ))}
        </div>
      </div>
    </div>
  )
}

const SocialItem = ({ iconUrl, label, username, link }) => (
  <a href={link}>
    <div className={'flex flex-row items-center justify-center md:justify-start mb-4 sm:mb-6'}>
      <img src={iconUrl} alt={label} class={'w-10 h-10 mr-4 sm:mr-4'}/>
      <p class={'font-semibold'}>{label}</p>
    </div>
  </a>

)

export default Social;

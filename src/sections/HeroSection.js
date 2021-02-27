import React from 'react';
import Image from "../components/image"

const HeroSection = () => {
  return (
    <div>
      <div class={'grid md:grid-cols-2'}>
        <div class={'section-header'}>
          <h1 class={'heading-1'}>Hi, I'm Neil <span role={'img'} aria-label={'label'}>👋🏽</span></h1>
          <h2 class={'text-center md:text-left mt-5 text-gray-600 text-md sm:text-lg md:text-xl'}>
            Coder <Emoji emoji={'💻'} label={'computer'} />,
            Exerciser <Emoji emoji={'🏃'} label={'runner'} />,
            Reader <Emoji emoji={'📚'} label={'books'} />,
            Paleo <Emoji emoji={'🍳'} label={'frying-pan'} />,
            Chocolate Chip Cookie Lover <Emoji emoji={'🍪'} label={'cookie'} />
          </h2>
        </div>
        <div class={'mt-8 sm:mt-0 max-w-full sm:mx-0'}>
          <Image />
        </div>
      </div>
    </div>
  )
}


const Emoji = ({ emoji, label }) => (
  <span role={'img'} aria-label={label}>{emoji}</span>
)

export default HeroSection;
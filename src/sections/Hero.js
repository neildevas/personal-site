import React from 'react';
import Image from "../components/HeroImage"

const HeroSection = () => {
  return (
    <div>
      <div class={'grid md:grid-cols-2'}>
        <div class={'section-header'}>
          <h1 class={'heading-1'}>Neil Devas</h1>
          <p class={'text-center md:text-left mt-5 text-gray-600 text-md sm:text-lg md:text-xl'}>
            Coder <Emoji emoji={'💻'} label={'computer'} />
            Exerciser <Emoji emoji={'🏃'} label={'runner'} />
            Reader <Emoji emoji={'📚'} label={'books'} />
            Health Nut <Emoji emoji={'🍳'} label={'frying-pan'} />
            Aspiring Creative <Emoji emoji={'💡'} label={'light bulb'} />
          </p>
        </div>
        <div className={'mt-8 md:mt-0 max-w-full sm:mx-0 flex justify-center relative hero-circle-container'}>
          <div className={'hero-circle'} />
          <Image />
        </div>
      </div>
    </div>
  )
}


const Emoji = ({ emoji, label }) => (
  <span role={'img'} aria-label={label} style={{ marginRight: 8 }}>{emoji}</span>
)

export default HeroSection;

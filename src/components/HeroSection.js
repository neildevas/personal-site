import React from 'react';

const HeroSection = () => {
  return (
    <div class={'grid sm:grid-cols-2 grid-cols-1'}>
      <div class={'max-w-full mx-auto sm:mx-0'}>
        <h1 class={'text-6xl font-bold'}>Neil Devas</h1>
        <h2 class={'mt-2 text-md text-gray-600 sm:mt-4 sm:text-xl'}>Coder, Exerciser, Paleo, Cookie Lover</h2>
      </div>
      <div class={'mt-8 sm:mt-0 max-w-full mx-auto sm:mx-0'}>
        <img src={'/Users/neildevas/Code/personal-site/src/images/gatsby-astronaut.png'} alt={'astronaut'} />
      </div>
    </div>
  )
}
export default HeroSection;
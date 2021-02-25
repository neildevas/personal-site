import React from 'react';
import Image from "../components/image"

const HeroSection = () => {
  return (
    <div>
      <div class={'grid md:grid-cols-2'}>
        <div class={'max-w-prose mx-auto sm:flex sm:flex-col sm:justify-center px-8'}>
          <h1 class={'heading-1'}>Hi, I'm Neil 👋🏽</h1>
          <h2 class={'text-center md:text-left mt-5 text-gray-600 sm:mt-5 text-md sm:text-lg md:text-xl'}>Coder, Exerciser, Paleo, Chocolate Chip Cookie Lover</h2>
        </div>
        <div class={'mt-8 sm:mt-0 max-w-full sm:mx-0'}>
          <Image />
        </div>
      </div>
    </div>
  )
}
export default HeroSection;
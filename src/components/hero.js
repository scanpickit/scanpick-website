import React from 'react';
import AnimatedText from './AnimatesText';
import TypingAnimation from './TypingAnimation';
import image1 from '../images/frontpng.png';
import side from '../images/side.png';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const Hero = () => {
  const phrases = [
    "MULTI SIDED VENDING",
    "ATTRACTIVE DESIGN MODEL",
    "AI INTEGRATED",
    "HYGIENIC",
  ];

  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen p-4'>
        <div className='text-center mb-2'>
          <h1 className='text-3xl font-bold text-white'>
            Welcome to <AnimatedText text="ScanPick!" />
          </h1>
          <p className='text-white font-normal text-xl mt-2'>
            Get your favorite food anytime with our vending machine nearby
          </p>
        </div>
        <div className='flex items-center mt-2 w-full max-w-4xl'>
          <div className='w-2/5'>
            <img src={image1} alt="img1" className='w-full h-full object-cover' />
          </div>
          <div className='w-3/5 ml-4'>
            <h1 className='text-white font-bold text-3xl'>
              First ever Vending machine with <br></br><TypingAnimation phrases={phrases} />
            </h1>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center h-screen p-4'>
        <div className='flex items-center mt-2 w-full max-w-4xl'>
          <div className='w-3/5 ml-4'>
            <h1 className='text-white font-bold text-3xl'>
              Get your food <span className='text-[#05d79f]'>HOT & READY</span> to eat in 1 min
            </h1>
          </div>
          <div className='w-2/5'>
            <img src={side} alt="img1" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;

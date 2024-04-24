"use client"
import React from 'react'
import linkedinImg from "../../public/socialimage/linkedin.png";
import { WavyBackground } from './ui/wavy-background'
import insta from "../../public/socialimage/instagram.png"
import gmail from "../../public/socialimage/gmail.png"
import github from "../../public/socialimage/github.png"
import { AnimatedTooltip } from './ui/animated-tooltip'

const Wave = () => {
const people = [
    {
      id: 1,
      name: "LinkedIn",
      designation: "Network",
      image: linkedinImg,
      live: "www.google.com"
    },
    {
      id: 2,
      name: "Github",
      designation: "Contribute",
      image: github,
      live: "www.google.com"

    },
    {
      id: 3,
      name: "Instagram",
      designation: "Socialize",
      image: insta,
      live: "www.google.com"

    },
    {
      id: 4,
      name: "Gmail",
      designation: "Connect",
      image: gmail,
      live: "www.google.com"

    },
   
  ];

    return (
        <div className='p-4 h-[95vh] relative overflow-hidden flex items-center justify-center'>
            <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
                <h1 className='md:text-9xl text-3xl font-semibold'>Let us connect!</h1>
                <div className="icons flex flex-row items-center justify-center mb-10 w-full">
                    {/* <AnimatedTooltip items={people}/> */}
                </div>
            </WavyBackground>
        </div>
    );
};

export default Wave;

"use client"
import React from 'react'
import linkedinImg from "../../public/socialimage/linkedin.png";
import { WavyBackground } from './ui/wavy-background'
import insta from "../../public/socialimage/instagram.png"
import gmail from "../../public/socialimage/gmail.png"
import github from "../../public/socialimage/github.png"
import Image from 'next/image';

const Wave = () => {

  const handleImageClick = (liveLink: string) => {
    // Ensure the live link has the correct protocol prefix
    const fullLink = liveLink.startsWith("http://") || liveLink.startsWith("https://") ? liveLink : `https://${liveLink}`;
    window.open(fullLink, "_blank"); // Open the full link in a new tab
  };
  
const people = [
    {
      id: 1,
      name: "LinkedIn",
      designation: "Network",
      image: linkedinImg,
      live: "https://www.linkedin.com/in/maulikjivani/"
    },
    {
      id: 2,
      name: "Github",
      designation: "Contribute",
      image: github,
      live: "https://github.com/maulik1110"

    },
    {
      id: 3,
      name: "Instagram",
      designation: "Socialize",
      image: insta,
      live: "www.instagram.com"

    },
    {
      id: 4,
      name: "Gmail",
      designation: "Connect",
      image: gmail,
      live: "mailto:maulik.monkenterprise@gmail.com"

    },
   
  ];

    return (
        <div className='p-4 h-[95vh] relative overflow-hidden flex items-center justify-center'>
            <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
                <h1 className='md:text-9xl text-4xl font-semibold'>Let us connect!</h1>
                <div className="icons flex flex-row items-center justify-center mb-10 w-full">
                    <div className="social flex gap-2 my-2">
                      {people.map((item,index)=>(
                        <Image onClick={()=>handleImageClick(item.live)} key={index} src={item.image} className='md:w-10 md:h-10 w-8 h-8' alt={item.name}/>
                      ))}
                    </div>
                </div>
            </WavyBackground>
        </div>
    );
};

export default Wave;

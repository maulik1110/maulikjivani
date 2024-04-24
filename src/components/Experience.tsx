// import React from 'react'

// const Experience = () => {
//     const data = [
//         {name: "Dabotics" , role: "Web Developer", description: ""},
//         {name: "Monk Enterprise" , role: "Lead Associate", description: ""},
//         {name: "SocioCare" , role: "Freeelance", description: ""},
//         {name: "Oracle" , role: "Java Developer", description: ""},
//     ]
//   return (
//     <div className='w-full mx-auto mt-10 relative p-4 '>
//       <div className="absolute inset-0  h-full w-full  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

//         <h1 className='text-center text-4xl z-10'>Experience & Training</h1>
//         <div className='mt-10 flex md:flex-nowrap flex-wrap items-center justify-center gap-2 z-10 '>
//             {data.map((item,index)=>{
//                 return(
//                     <div key={index} className='flex flex-col py-5 items-center shadow-md p-2 rounded-lg z-10 bg-gradient-to-t from-purple-100 to-blue-100 hover:bg-gradient-to-tr hover:from-purple-100 hover:to-yellow-100 transition-all duration-30'>
//                         <h1 className='text-2xl font-semibold my-1'>{item.name}</h1>
//                         <h2 className='text-lg font-regular my-1'>{item.role}</h2>
//                         <p className='text-sm text-center my-1'>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi enim laudantium voluptatum blanditiis, ab dignissimos quod deleniti vel harum quae!"}</p>
//                     </div>
//                 )
//             })}
//         </div>
//     </div>
//   )
// }

// export default Experience
"use client";
import React from "react";
import pic from "../../public/projectimage/lp04.png";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const Experience = () => {
  const data = [
    
    {
      location: "Remote",
      name: "Freelance",
      description: "I run an agency that helps clients to grow their presence online by the medium of social media and web availability",
      role: "Founder",
      photo: pic,
      date: "Present"

    },
    {
      location: "Uttar Pradesh",
      name: "dabotics",
      description: "Developed multipage web app i=that are been used in day to day life",
      role: "Developer",
      photo: pic,
      date: "Aug 2023"
    },
    {
      location: "Work from home",
      name: "Oracle",
      description: "In depth learning in Java and its concepts as a part of my training sessions",
      role: "Training",
      photo: pic,
      date: "Oct 2023"

    },
    {
      location: "Rajkot",
      name: "Monk Enterprise",
      description: "Worked with an ecommerce company and handled the disribution and its channel of order processing operations.",
      role: "Manager",
      photo: pic,
      date: "Nov 2022"

    },
    // {
    //   location: "I",
    //   name: "dabotics",
    //   description: " kmckjn ckj kncksmcm  kjsmd kmkmxk",
    //   role: "developer",
    //   photo: pic,
    //   date: "Aug 2023"

    // },
  ];
  return (
    <div className="">
      <h1 className="text-center text-3xl font-semibold">
        Experience and Training
      </h1>
      <div className="w-full h-full flex flex-wrap items-center justify-center md:gap-5  mx-auto">
        {data.map((item, index) => (
          <PinContainer key={index} title={item.location} className="border-none">
            <div className="md:h-[40vh] md:w-[23vw] w-[80vw] h-[45vh]  mx-auto">
              <Image
                className="md:w-full md:h-[60%] w-full h-[50%] rounded-lg"
                src={item.photo}
                alt=""
              />
              <h1 className="font-semibold text-lg capitalize">{item.name}</h1>
              <p className="text-sm py-1 font-medium">{item.date} || {item.role}</p>
              <h1 className="text-black text-xs font-normal">
                {item.description}
              </h1>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default Experience;

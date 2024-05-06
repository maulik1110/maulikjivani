import React from "react";
import free from "../../public/aboutimage/free.png";
import freelance from "../../public/aboutimage/freelancerpng.png";
import job from "../../public/aboutimage/job.png";
import Image from "next/image";
import sde from "../../public/aboutimage/sde.png";
import reactpng from "../../public/aboutimage/reactpng.png";
import fullstack from "../../public/aboutimage/fullstack.png";

const About = () => {
  return (
    <div className="w-full my-10  text-center relative">
     <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[60%] translate-y-[20%] md:translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-40 blur-[80px]"></div>
      
      <div className="boldtext font-semibold text-xl md:text-2xl ">
        Maulik Jivani || Web developer
      </div>
      <p className="para w-[80%] mx-auto md:mt-5 mt-2 text-balance">
      Driven and skilled, I am a passionate web developer focused on creating engaging and user-friendly web applications. With expertise in both frontend and backend technologies, I combine creativity and functionality to deliver compelling digital experiences that resonate with users and achieve business goals.
      </p>
      <div className="w-[80%] mx-auto md:flex md:gap-2 mt-5">
        <div className="left md:w-1/2 w-full ">
          <h1 className="font-semibold text-lg text-center my-2">
            Available for:
          </h1>
          <div className="main flex justify-evenly gap-5 w-full items-end bg-red-50 py-4 px-1 md:px-5 md:py-10 rounded-lg ">
            <div className="flex flex-col items-center justify-center">
              <Image width={50} height={50} src={free} alt="" />
              <h4 className="my-2 text-xs font-semibold md:text-lg capitalize">
                Internship
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image width={50} height={50} src={job} alt="" />
              <h4 className="my-2 text-xs font-semibold md:text-lg capitalize">
                Job
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image width={50} height={50} src={freelance} alt="" />
              <h4 className="my-2 text-xs font-semibold md:text-lg capitalize">
                Freelance
              </h4>
            </div>
          </div>
        </div>
        <div className="right md:w-1/2">
          <h1 className="font-semibold text-lg text-center my-2">Roles:</h1>
          <div className="main flex justify-between gap-5 w-full items-end bg-red-50 px-5 py-3 md:py-6 rounded-lg ">
            <div className="flex flex-col items-center justify-center">
              <Image width={50} height={50} src={sde} alt="" />
              <h4 className="my-2 text-xs font-semibold capitalize  md:text-lg">
                Software Developer
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image width={50} height={50} src={reactpng} alt="" />
              <h4 className="my-2 text-xs font-semibold capitalize md:text-lg">
                React Developer
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image width={50} height={50} src={fullstack} alt="" />
              <h4 className="my-2 text-xs font-semibold capitalize md:text-lg">
                Full Stack Developer
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

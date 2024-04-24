"use client";
import React from "react";
// import { motion } from 'framer-motion'
import { motion } from "framer-motion";

const Skilltype = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      // viewport={{}}
      // className="flex items-center justify-center rounded-full md:font-semibold font-light text-black md:py-3 py-1 md:px-6 px-2 text-xs md:text-base  shadow-lg absolute bg-gradient-to-r from-yellow-100 via-orange-200 to-purple-300"
      className="flex items-center justify-center rounded-full md:font-regular font-light text-white bg-black md:py-3 py-1 md:px-6 px-2 text-xs md:text-base  shadow-lg absolute "
    >
      {name}
    </motion.div>
  );
};

const Skill = () => {
  return (
    <div className="p-4  ">
    

      
      <h2 className="font-bold md:text-8xl text-5xl md:mt-40 mt-10 w-full text-center ">
        Skills
      </h2>
      <div className="w-full md:h-screen h-[50vh] relative flex items-center justify-center rounded-full md:bg-repeating-radial-gradient bg-repeating-radial-gradient-sm">
        <motion.div
          whileHover={{ scale: 1.05 }}
        //   className="flex items-center justify-center rounded-full font-semibold bg-black text-white px-6 py-3"
        className="flex items-center justify-center rounded-full md:font-regular font-light bg-black text-white md:py-3 py-1 md:px-6 px-2 text-xs md:text-base  shadow-lg absolute"

        >
          Web
        </motion.div>
        <Skilltype name="CSS" x="-5vw" y="-12vw" />
        <Skilltype name="HTML" x="42vw" y="-3vw" />
        <Skilltype name="JS" x="20vw" y="6vw" />
        <Skilltype name="ReactJS" x="0vw" y="12vw" />
        <Skilltype name="NextJS" x="-22vw" y="-18vw" />
        <Skilltype name="Tailwind" x="22vw" y="-20vw" />
        <Skilltype name="C++" x="-25vw" y="1vw" />
        <Skilltype name="UI/UX" x="-5vw" y="-22vw" />
        <Skilltype name="Java" x="-38vw" y="-10vw" />
        <Skilltype name="Python" x="-18vw" y="22vw" />
        <Skilltype name="Cloud" x="23vw" y="-10vw" />
        <Skilltype name="Firebase" x="30vw" y="18vw" />
        <Skilltype name="Node" x="32vw" y="8vw" />
        <Skilltype name="Express" x="-38vw" y="14vw" />
      </div>
    </div>
  );
};

export default Skill;

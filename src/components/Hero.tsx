import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className=" w-full mt-10 h-[70vh] md:h-[95vh] p-4 flex flex-col items-center justify-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <p className="font-semibold md:text-2xl text-zinc-400 text-center mt-12">
        Not just an engineer but a skilled
      </p>
      <h1 className="font-bold text-5xl text-center md:text-9xl my-4 relative hidden md:block">
        <div className="absolute top-0 left-10 w-28 h-28 md:h-52 md:w-52 rounded-full mix-blend-multiply filter blur-xl bg-purple-300    animate-blob "></div>
        <div className="absolute top-0 left-32 md:w-52 md:h-52 h-32 w-32 rounded-full mix-blend-multiply filter blur-xl bg-yellow-300 aimation-delay-4000   animate-blob"></div>
        <div className="absolute top-0 -right-8 md:w-52 md:h-52 h-32 w-32 rounded-full mix-blend-multiply filter blur-xl bg-pink-300    animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-32 md:w-52 md:h-52 h-32 w-32 rounded-full mix-blend-multiply filter blur-xl bg-orange-300   animate-blob"></div>
        <div className="absolute top-0 left-72 md:w-52 md:h-52 h-32 w-32 rounded-full mix-blend-multiply filter blur-xl bg-green-300 .   animate-blob"></div>
        <div className="absolute top-0 left-[40%] md:w-52 md:h-52 h-32 w-32 rounded-full mix-blend-multiply filter blur-xl bg-blue-300 aimation-delay-2000   animate-blob"></div>
        <div className="absolute top-0 right-72 md:w-52 md:h-52 h-32 w-32 rounded-full mix-blend-multiply filter blur-xl bg-slate-300 aimation-delay-4000   animate-blob"></div>
        <span>WEB DEVELOPER</span>
      </h1>
      <h1 className="font-bold text-5xl text-center md:text-9xl my-4 relative md:hidden">
        <div className="absolute top-0 left-0 w-28 h-28 md:h-52 md:w-52 rounded-full mix-blend-multiply filter blur-xl bg-yellow-200    animate-blob2 aimation-delay-2000"></div>
        <div className="absolute top-0 left-28 md:w-52 md:h-52 h-32 w-32 rounded-full mix-blend-multiply filter blur-xl bg-pink-200 aimation-delay-4000   animate-blob2"></div>
        <div className="absolute top-0 -right-0 md:w-52 md:h-52 h-32 w-32 rounded-full mix-blend-multiply filter blur-xl bg-purple-200    animate-blob2"></div>
        <div className="absolute top-0 left-24 md:w-52 md:h-52 h-32 w-32 rounded-full mix-blend-multiply filter blur-xl bg-slate-200 .   animate-blob2"></div>
        <span>WEB DEVELOPER</span>
      </h1>
      <div className="mt-4">
        <Link href={"/resume"} className="">
          <button className="bg-transparent text-black hover:bg-black hover:text-white transition-all duration-150 border border-zinc-900 font-semibold py-4 px-4 rounded-full">
            Download Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

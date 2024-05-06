import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-900 pt-12 py-4 relative border-t-2">
      <div className="absolute bottom-auto left-auto right-0 top-0 md:h-[250px] md:w-[1900px] h-[70%] w-[1900px] -translate-x-[10%] translate-y-[20%]  md:translate-y-[20%] rounded-full bg-[rgba(235,109,244,0.5)] opacity-40 blur-[50px]"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 px-4 md:px-8">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-lg my-2">About Us</h1>
          <p className="text-sm text-justify">
          I'm a web developer crafting digital experiences through clean code and creative design. Specializing in front-end development, I ensure seamless and responsive web solutions that captivate users. Proficient in modern technologies and frameworks, I thrive in collaborative environments to bring ideas to life. Let's collaborate and build engaging websites that leave a lasting impact!
          </p>
        </div>
        {/* <div className="text-center md:text-left">
          <h1 className="font-semibold text-lg my-2">Quick Links</h1>
          <div className="flex flex-col">
            <a
              className="text-sm font-medium hover:text-zinc-500 transition-all duration-200 z-50"
              href=""
            >
              Home
            </a>
            <a
              className="text-sm font-medium hover:text-zinc-500 transition-all duration-200 z-50"
              href=""
            >
              About
            </a>
            <a
              className="text-sm font-medium hover:text-zinc-500 transition-all duration-200 z-50"
              href="/project"
            >
              Projects
            </a>
            <a
              className="text-sm font-medium hover:text-zinc-500 transition-all duration-200 z-50"
              href=""
            >
              Contact
            </a>
          </div>
        </div> */}
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-lg my-2">Follow Me On</h1>
          <div className="flex flex-col">
            <a
              className="text-sm font-medium hover:text-zinc-500 transition-all duration-200 z-50"
              href=""
            >
              Instagram
            </a>
            <a
              className="text-sm font-medium hover:text-zinc-500 transition-all duration-200 z-50"
              href="https://www.linkedin.com/in/maulikjivani/"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              className="text-sm font-medium hover:text-zinc-500 transition-all duration-200 z-50"
              href="https://github.com/maulik1110"
            >
              Github
            </a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-lg my-2">Contact Address</h1>
          <p className="text-sm font-medium">
            Chandigarh, <br />
            Kharar <br /> 140413 <br />
            8238959709 <br />
            maulik.monkenterprise@gmail.com
          </p>
        </div>
      </div>

      <p className="text-center font-semibold mt-4 text-gray-900">
        All rights reserved by Maulik Jivani &copy; 2024
      </p>
    </footer>
  );
};

export default Footer;

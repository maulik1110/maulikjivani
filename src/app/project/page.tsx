"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import ott from "../../../public/projimage/ott.png";
import pets from "../../../public/projimage/pets.png";
import portfolio from "../../../public/projimage/portfolio.png";
import website01 from "../../../public/projimage/website01.png";
import website02 from "../../../public/projimage/website02.png";
import website03 from "../../../public/projimage/website03.png";
import lp01 from "../../../public/projimage/lp01.png";
import lp02 from "../../../public/projimage/lp02.png";
import lp03 from "../../../public/projimage/lp03.png";
import lp04 from "../../../public/projimage/lp04.png";
import Footer from "@/components/Footer";

const page = () => {
  const projects = [
    {
      title: "A Movie platform (React)",
      imageUrl: ott,
      live: "https://ottplatform-one.vercel.app/",
      github: "https://appcare.vercel.app/",
      description:
        "Developed a React-based OTT platform using Axios, Redux, and Firebase, enhancing user experience by 20% with real-time database integration.",
    },
    {
      title: "A Pets care app (React)",
      imageUrl: pets,
      live: "https://appcare.vercel.app/",
      github: "https://appcare.vercel.app/",

      description:
        "Created a React-based e-commerce app with machine learning for personalized recommendations, ensuring responsive interfaces using modern web technologies.",
    },
    {
      title: "Portfolio (React)",
      live: "https://ottplatform-one.vercel.app/",
      github: "https://appcare.vercel.app/",
      imageUrl: portfolio,
      description: "Crafted a dynamic Next.js portfolio with server-side rendering and advanced animations, showcasing diverse projects and technical expertise."
    },
    {
      title: "Modern UI Website (JS)",
      live: "https://maulik1110.github.io/mordernWeb01/",
      github: "https://github.com/maulik1110/mordernWeb01",
      imageUrl: website01,
      description:
        "Designed a sleek, responsive modern UI website using JavaScript, enhancing user engagement with intuitive interfaces and smooth animations",
    },
    {
      title: "Ecommerce UI Website (JS)",
      live: "https://maulik1110.github.io/herbalwebpage/",
      github: "https://github.com/maulik1110/herbalwebpage",
      imageUrl: website02,
      description:
        "Developed a robust e-commerce website with JavaScript, providing seamless shopping experiences through dynamic content and efficient transaction handling.",
    },
    {
      title: "Brand Agency Website (JS)",
      live: "https://maulik1110.github.io/Dabotics_project/",
      github: "https://github.com/maulik1110/Dabotics_project",
      imageUrl: website03,
      description:
        "Created an interactive organic store website using JavaScript, optimizing for user experience with natural aesthetics and streamlined product browsing.",
    },
    {
      title: "Landing Page 1 ",
      live: "https://maulik1110.github.io/Artgallary_webpage/",
      github: "https://github.com/maulik1110/Artgallary_webpage",
      imageUrl: lp01,
      description:
        "Developed a landing page with modern animations, enhancing user engagement and visual appeal through smooth, interactive elements.",
    },
    {
      title: "Landing Page 2",
      live: "https://maulik1110.github.io/landingpagetype/",
      github: "https://github.com/maulik1110/landingpagetype",
      imageUrl: lp02,
      description:
        "Created an impactful landing page, focusing on clear messaging and intuitive navigation to drive conversions and user interest.",
    },
    {
      title: "Landing Page 3",
      live: "https://maulik1110.github.io/brandpage/",
      github: "https://github.com/maulik1110/brandpage",
      imageUrl: lp03,
      description:
        "Designed a compelling branding landing page, effectively conveying brand identity and values with cohesive visuals and strategic content placement.",
    },
  ];
  return (
    <div className="h-screen text-black py-12 pt-36 absolute inset-0 -z-10  w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      {/* <div className="absolute left-0 right-0 top-[50%] -z-10 m-auto h-[1000px] w-[1000px] rounded-full bg-fuchsia-500 opacity-40 blur-[70px]"></div> */}

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_2px,transparent_1px)] [background-size:30px_30px]"></div>

      <h1 className="text-lg md:text-7xl text-center font-bold mb-2">
        All Projects
      </h1>
      <div className="flex flex-wrap md:justify-evenly justify-center items-center ">
        {projects.map((item, index) => (
          <CardContainer className="inter-var mx-2 my-2 " key={index}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl py-2 px-4 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-2">
                <Image
                  src={item.imageUrl}
                  height="1000"
                  width="1000"
                  className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.live}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.github}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Github →
                </CardItem>
                {/* <CardItem
                translateZ={20}
                as={Link}
                href={item.github}
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem> */}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default page;

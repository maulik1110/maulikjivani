"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import ott from "../../../public/projectimage/ott.png";
import pets from "../../../public/projectimage/pets.png";
import portfolio from "../../../public/projectimage/portfolio.png";
import website01 from "../../../public/projectimage/website01.png";
import website02 from "../../../public/projectimage/website02.png";
import website03 from "../../../public/projectimage/website03.png";
import lp01 from "../../../public/projectimage/landpage01.png";
import lp02 from "../../../public/projectimage/lp02.png";
import lp03 from "../../../public/projectimage/lp03.png";
import lp04 from "../../../public/projectimage/lp04.png";
import Footer from "@/components/Footer";

const page = () => {
  const projects = [
    {
      title: "A Movie platform (React)",
      imageUrl: ott,
      live: "https://ottplatform-one.vercel.app/",
      github: "https://appcare.vercel.app/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed justo ac urna gravida rhoncus.",
    },
    {
      title: "A Pets care app (React)",
      imageUrl: pets,
      live: "https://appcare.vercel.app/",
      github: "https://appcare.vercel.app/",

      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec h.",
    },
    {
      title: "Portfolio (React)",
      live: "https://ottplatform-one.vercel.app/",
      github: "https://appcare.vercel.app/",
      imageUrl: portfolio,
      description:
        "Fusce auctor mi eu nulla accumsan, nec congue justo convallis. Mauris tincidunt fermentum maximus.",
    },
    {
      title: "Modern UI Website (JS)",
      live: "https://maulik1110.github.io/mordernWeb01/",
      github: "https://github.com/maulik1110/mordernWeb01",
      imageUrl: website01,
      description:
        "Fusce auctor mi eu nulla accumsan, nec congue justo convallis. Mauris tincidunt fermentum maximus.",
    },
    {
      title: "Ecommerce UI Website (JS)",
      live: "https://ottplatform-one.vercel.app/",
      github: "https://appcare.vercel.app/",
      imageUrl: website02,
      description:
        "Fusce auctor mi eu nulla accumsan, nec congue justo convallis. Mauris tincidunt fermentum maximus.",
    },
    {
      title: "Brand Agency Website (JS)",
      live: "https://maulik1110.github.io/Dabotics_project/",
      github: "https://github.com/maulik1110/Dabotics_project",
      imageUrl: website03,
      description:
        "Fusce auctor mi eu nulla accumsan, nec congue justo convallis. Mauris tincidunt fermentum maximus.",
    },
    {
      title: "Landing Page 1 ",
      live: "https://maulik1110.github.io/Artgallary_webpage/",
      github: "https://github.com/maulik1110/Artgallary_webpage",
      imageUrl: lp01,
      description:
        "Fusce auctor mi eu nulla accumsan, nec congue justo convallis. Mauris tincidunt fermentum maximus.",
    },
    {
      title: "Landing Page 2",
      live: "https://ottplatform-one.vercel.app/",
      github: "https://appcare.vercel.app/",
      imageUrl: lp02,
      description:
        "Fusce auctor mi eu nulla accumsan, nec congue justo convallis. Mauris tincidunt fermentum maximus.",
    },
    {
      title: "Landing Page 3",
      live: "https://ottplatform-one.vercel.app/",
      github: "https://appcare.vercel.app/",
      imageUrl: lp03,
      description:
        "Fusce auctor mi eu nulla accumsan, nec congue justo convallis. Mauris tincidunt fermentum maximus.",
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
          <CardContainer className="inter-var mx-2 my-2 ">
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

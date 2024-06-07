import React from 'react'
import ott from "../../public/projectimage/ott.png"
import pets from "../../public/projectimage/pets.png"
import portfolio from "../../public/projectimage/portfolio.png"
import Image from 'next/image'
import Link from 'next/link'


const HomeProject = () => {
    const data = [
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
            description:
              "Crafted a dynamic Next.js portfolio with server-side rendering and advanced animations, showcasing diverse projects and technical expertise.",
          },
    ]
  return (
    <div className='md:W-[80%] mx-auto p-5 mt-5'>
        <h1 className='text-4xl font-semibold text-center my-4'>Projects</h1>
        <div className='cards flex gap-5 flex-col md:flex-row md:justify-evenly'>
            {data.map((item,index)=>(
                // <div className="card w-80 h-80 shadow-lg bg-blue-100 bg-gradient-to-tr  rounded-lg p-2 hover:scale-[1.04] cursor-pointer duration-300 transition ease-in-out" key={index}>
                <div className="card md:w-80 md:h-80 shadow-lg bg-gradient-to-tr from-blue-100 to-pink-100 rounded-lg p-2 hover:scale-[1.04] cursor-pointer duration-300 transition ease-in-out" key={index}>

                    <Image className='w-full object-cover rounded-xl group-hover/card:shadow-xl'
                    src={item.imageUrl} alt="" />
                    <div className="content mt-4">
                        <h3 className='text-md font-semibold'>{item.title}</h3>
                        <p className='text-sm'>{item.description}</p>
                    </div>
                    <div className="button mt-4 flex justify-between mb-4">
                        <Link href={item.github}><button className='px-4 py-1 bg-transparent text-black border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'>Github</button></Link>
                        <Link href={item.live}><button className='px-4 py-1 bg-black text-white border border-white rounded-lg hover:bg-transparent hover:border-black hover:text-black transition duration-300 ease-in-out'>Live</button></Link>
                    </div>
                </div>
            ))}
        </div>
            <Link className='px-4 py-1 text-center mx-auto block mt-10 w-fit bg-black text-white border border-white rounded-lg hover:bg-transparent hover:border-black hover:text-black transition duration-300 ease-in-out' href={"/project"}>View More</Link>
    </div>
  )
}

export default HomeProject
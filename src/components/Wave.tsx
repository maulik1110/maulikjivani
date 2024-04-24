"use client"
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
// // import linkedin from "../../public/socialimage/linkedin.png"
// // import insta from "../../public/socialimage/instagram.png"
// // import gmail from "../../public/socialimage/gmail.png"
// // import github from "../../public/socialimage/github.png"
// // import { AnimatedTooltip } from './ui/animated-tooltip'

const Wave = () => {
// //     const data = [
// //         {image: linkedin, id: 1,name: "LinkedIn" ,designation: "connect",url: "https://www.linkedin.com/in/maulikjivani/"},
// //         {image: github, id: 2,name: "Github" ,designation: "connect",url: "https://github.com/maulik1110"},
// //         {image: insta, id: 3,name: "Instagram" ,designation: "connect",url: "https://www.youtube.com/watch?v=fpiNLizme9o"},
// //         // {image: gmail, id: 4,name: "Gmail" ,designation: "connect",url: "maulik.monkenterprise@gmail.com"},
// //         {image: gmail, id: 4, name: "Gmail", designation: "connect", url: "mailto:maulik.monkenterprise&commat;gmail.com"},

// //     ]
// //   return (
// //     <div className='p-4 h-[95vh] relative overflow-hidden flex items-center justify-center'>
// //         <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
// //             <h1 className='md:text-9xl text-3xl font-semibold'>Let's connect!</h1>
// //             <div className="icons flex flex-row items-center justify-center mb-10 w-full">
// //                     <AnimatedTooltip items={data}/>
// //             </div>
// //         </WavyBackground>
// //     </div>
// //   )
// // }

// // export default Wave

// "use client";
// import React from 'react';
// import { WavyBackground } from './ui/wavy-background';
// import linkedinImg from "../../public/socialimage/linkedin.png";
// import instaImg from "../../public/socialimage/instagram.png";
// import gmailImg from "../../public/socialimage/gmail.png";
// import githubImg from "../../public/socialimage/github.png";
// import { AnimatedTooltip } from './ui/animated-tooltip';

// const Wave = () => {
//     const data = [
//         {image: linkedinImg.src, id: 1, name: "LinkedIn", designation: "connect", url: "https://www.linkedin.com/in/maulikjivani/"},
//         {image: githubImg.src, id: 2, name: "Github", designation: "connect", url: "https://github.com/maulik1110"},
//         {image: instaImg.src, id: 3, name: "Instagram", designation: "connect", url: "https://www.youtube.com/watch?v=fpiNLizme9o"},
//         {image: gmailImg.src, id: 4, name: "Gmail", designation: "connect", url: "mailto:maulik.monkenterprise&commat;gmail.com"},
//     ];

    return (
        <div className='p-4 h-[95vh] relative overflow-hidden flex items-center justify-center'>
            <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
                <h1 className='md:text-9xl text-3xl font-semibold'>Let us connect!</h1>
                <div className="icons flex flex-row items-center justify-center mb-10 w-full">
                    {/* <AnimatedTooltip items={data}/> */}
                </div>
            </WavyBackground>
        </div>
    );
};

export default Wave;

// "use client"
// import Image from 'next/image'
// import React, { useRef, useState } from 'react'
// import emailjs from '@emailjs/browser';
// import contactimg from "../../../public/img.png"
// import Footer from '@/components/Footer';

// const page = () => {
//   const [success, setSuccess] = useState(false)
//   const [error, seterror] = useState(false)

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     seterror(false);
//     setSuccess(false);

//     emailjs
//       .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
//         publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
//       })
//       .then(
//         () => {
//           setSuccess(true)
//           form.current.reset()
//         },
//         (error) => {
//           seterror(true)
//         },
//       );
//   };
//   return (
//     <>
//     <main className='  max-w-screen mx-auto md:flex p-4 pt-32 relative -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_5px,transparent_5px),linear-gradient(to_bottom,#8080800a_5px,transparent_5px)] bg-[size:30px_30px]'>
//       {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] z-40"></div> */}
//       {/* <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div> */}


//       <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_2px,transparent_1px)] [background-size:30px_30px]"></div>

//       <div className="md:w-1/2 w-full">
//         <Image className='w-full h-full' src={contactimg} alt=''/>
//       </div>
//       <div className="right md:w-1/2 w-full ">
//         <form onSubmit={sendEmail} ref={form} className='w-full z-50 shadow-md bg-white rounded-lg text-lg flex flex-col gap-8 justify-center p-8'>
//           <span>Greetings!</span>
//           <textarea placeholder='Your message here....' className='bg-transparent border-b-2 border-b-black outline-none resize-none shadow-sm p-2 rounded-lg' name="user_message" id=""  rows={6}/>
//           <span>Your mail address: </span>
//           <input type="text" name='user_email' className='bg-transparent border-b-2 border-b-black outline-none resize-none shadow-sm p-2 rounded-lg' placeholder='Email Address' />
//           <span>Regards</span>
//           <button type='submit' className='bg-[rgba(235,109,244,0.4)] opacity-50 rounded-sm font-semibold text-black p-4'>Submit</button>

//           {success && <span className='font-semibold text-lg text-green-400'>Your message has been sent successfully!</span>}
//           {error && <span className='font-semibold text-lg text-red-400'>Oops! Something went wrong</span>}
//         </form>
//       </div>
//       {/* <Footer/> */}
//     </main>
//     <Footer/>
//     </>
//   )
// }

// export default page

"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import contactimg from "../../../public/img.png";
import Footer from '@/components/Footer';

const Page = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null); // Specify the type of useRef

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
  
    const form = formRef.current;
  
    if (form) { // Check if formRef.current is not null or undefined
      emailjs
        .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID || '', process.env.NEXT_PUBLIC_TEMPLATE_ID || '', form, {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY || '',
        })
        .then(
          () => {
            setSuccess(true);
            form.reset(); // Assuming form has a reset method
          },
          (err) => {
            setError(true);
          }
        );
    }
  };
  
  return (
    <>
      <main className='max-w-screen mx-auto md:flex p-4 pt-32 relative -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_5px,transparent_5px),linear-gradient(to_bottom,#8080800a_5px,transparent_5px)] bg-[size:30px_30px]'>
        <div className="md:w-1/2 w-full">
          <Image className='w-full h-full' src={contactimg} alt=''/>
        </div>
        <div className="right md:w-1/2 w-full ">
          <form onSubmit={sendEmail} ref={formRef} className='w-full z-50 shadow-md bg-white rounded-lg text-lg flex flex-col gap-8 justify-center p-8'>
            <span>Greetings!</span>
            <textarea placeholder='Your message here....' className='bg-transparent border-b-2 border-b-black outline-none resize-none shadow-sm p-2 rounded-lg' name="user_message" id=""  rows={6}/>
            <span>Your mail address: </span>
            <input type="text" name='user_email' className='bg-transparent border-b-2 border-b-black outline-none resize-none shadow-sm p-2 rounded-lg' placeholder='Email Address' />
            <span>Regards</span>
            <button type='submit' className='bg-[rgba(235,109,244,0.4)] opacity-50 rounded-sm font-semibold text-black p-4'>Submit</button>

            {success && <span className='font-semibold text-lg text-green-500'>Your message has been sent successfully!</span>}
            {error && <span className='font-semibold text-lg text-red-500'>Oops! Something went wrong</span>}
          </form>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Page;

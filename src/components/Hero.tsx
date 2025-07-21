// import React from 'react'
// import { Button } from './ui/button'
// import Image from 'next/image'
// import { ArrowRight } from 'lucide-react'

// export default function Hero() {
//   return (
//     <div
//       className='container mx-auto rounded-xl p-8'
//       style={{
//         backgroundImage: "url('/image/hero.png')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         width: '100%',
//         // paddingTop: '50px',
//         height: '750px',

//       }}
//     >
//       <div className="lg:flex justify-between items-center h-full">
//         <div className='lg:w-1/2  space-y-6'>
//           <h1 className='text-5xl font-bold text-[#4B5563] '>Create Accurate Offers. Manage Your Projects. All in One Place</h1>
//           <p className='text-2xl font-medium text--[#4B5563]'>Veloo is your smart toolkit for offer generation, task tracking, and customer follow-up — without the back-and-forth</p>
//           <Button className="bg-[#059669] text-lg shadow-2xl hover:bg-[#059669] text-white font-medium px-6 py-6 rounded-md transition-colors">
//             Get Started Now
//             <ArrowRight className="size-6 ml-1" />
//           </Button>
//         </div>
//         <div>
//           <Image src="/image/men.svg" alt="hero" width={660} height={500}></Image>
//         </div>
//       </div>
//     </div>
//   )
// }
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div
      className="container mx-auto rounded-xl p-4 sm:p-6 md:p-8 lg:p-10"
      style={{
        backgroundImage: "url('/image/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        minHeight: '70vh', // Use viewport height for better scaling
        display: 'flex',
        height: '750px',
        alignItems: 'center',
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full gap-6">
        <div className="lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4B5563]    lg:leading-18 leading-10">
            Create Accurate Offers. Manage Your Projects. All in One Place
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#4B5563]">
            Veloo is your smart toolkit for offer generation, task tracking, and customer follow-up — without the back-and-forth
          </p>
          <Button
          title='Get Started Now'
            className="bg-[#059669] cursor-pointer  text-base sm:text-lg font-medium px-4 py-4 sm:px-6 sm:py-6 rounded-md shadow-2xl hover:bg-[#047857] text-white transition-colors flex items-center justify-center mx-auto lg:mx-0"
          >
            Get Started Now
            <ArrowRight className="size-5 sm:size-6 ml-2" />
          </Button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/image/men.svg"
            alt="hero"
            width={660}
            height={500}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[660px] h-auto"
            priority // Preload for hero image
          />
        </div>
      </div>
    </div>
  );
}
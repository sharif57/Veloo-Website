// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import PenIcon from './penIcon';
// import SettingIcon from './settingIcon';
// import EmailIcon from './EmailIcon';

// export default function HowItWorks() {
//     const steps = [
//         {
//             id: 1,
//             title: 'Create an Offer',
//             description: 'Start with AI or manual input based on your service',
//             icon: <PenIcon />, // Update with your icon path
//         },
//         {
//             id: 2,
//             title: 'Customize Resources & Margins',
//             description: 'Add materials, set hourly rates, adjust profit margins',
//             icon: <SettingIcon />, // Update with your icon path
//         },
//         {
//             id: 3,
//             title: 'Send Offer to Customer',
//             description: 'Export as PDF or send via email. No customer login needed',
//             icon: <EmailIcon />, // Update with your icon path
//         },
//     ];

//     return (
//         <div className=" px-4 sm:px-8 lg:px-16">

//             <h1 className='text-6xl mb-16 font-semibold text-[#4B5563] text-center'>How It Works</h1>

//             <div className="relative max-w-4xl mx-auto">
//                 {/* Vertical line */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

//                 <div className="space-y-16">
//                     {steps.map((step, index) => (
//                         <div
//                             key={step.id}
//                             className={`flex flex-col md:flex-row gap-48 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                                 }`}
//                         >      <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
//                                 <div className="flex flex-col items-center md:items-end text-center md:text-right">
//                                     <div className=" mb-4">
//                                         {
//                                             step.icon
//                                         }
//                                     </div>
//                                     <span className="text-sm font-medium text-green-600">
//                                         {step.id.toString().padStart(2, '0')}
//                                     </span>
//                                     <h3 className="text-lg font-semibold text-gray-700 mt-1">
//                                         {step.title}
//                                     </h3>
//                                     <p className="text-sm text-gray-500 max-w-xs mt-1">
//                                         {step.description}
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="hidden md:block w-1/2"></div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//         </div>
//     );
// }
// 'use client';
// import React from 'react';
// import PenIcon from './penIcon';
// import SettingIcon from './settingIcon';
// import EmailIcon from './EmailIcon';

// export default function HowItWorks() {
//     const steps = [
//         {
//             id: 1,
//             title: 'Create an Offer',
//             description: 'Start with AI or manual input based on your service',
//             icon: <PenIcon />,
//         },
//         {
//             id: 2,
//             title: 'Customize Resources & Margins',
//             description: 'Add materials, set hourly rates, adjust profit margins',
//             icon: <SettingIcon />,
//         },
//         {
//             id: 3,
//             title: 'Send Offer to Customer',
//             description: 'Export as PDF or send via email. No customer login needed',
//             icon: <EmailIcon />,
//         },
//     ];

//     return (
//         <div className="px-4 sm:px-8 lg:px-16 py-16 ">
//             <h1 className='text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 font-semibold text-[#4B5563] text-center'>
//                 How It Works
//             </h1>

//             <div className="container mx-auto">
//                 {/* Mobile Timeline */}
//                 <div className="md:hidden relative">
//                     <div className="absolute left-6 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
//                     <div className="space-y-12 pl-12">
//                         {steps.map((step) => (
//                             <div key={step.id} className="relative">
//                                 <div className="absolute -left-12 top-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
//                                     {step.id.toString().padStart(2, '0')}
//                                 </div>
//                                 <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
//                                     <div className="mb-4 flex justify-center">
//                                         {step.icon}
//                                     </div>
//                                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                         {step.title}
//                                     </h3>
//                                     <p className="text-gray-600">
//                                         {step.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Desktop Timeline */}
//                 <div className="hidden md:block relative">
//                     {/* Continuous vertical line in middle */}
//                     <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

//                     <div className="space-y-0">
//                         {steps.map((step, index) => (
//                             <div
//                                 key={step.id}
//                                 className={`flex items-center gap-20 min-h-[400px] ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
//                             >
//                                 {/* Icon Side (alternates) */}
//                                 <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
//                                     <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
//                                         <div className="w-16 h-16 flex items-center justify-center">
//                                             {step.icon}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Center Indicator */}
//                                 <div className="relative w-0 flex justify-center">
//                                     {/* <div className="absolute h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold z-10">
//                                         {step.id.toString().padStart(2, '0')}
//                                     </div> */}
//                                 </div>

//                                 {/* Text Side (alternates) */}
//                                 <div className={`w-1/2 text-left ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
//                                     <div className={`max-w- mx-auto space-y-2 ${index % 2 === 0 ? 'text-left' : 'text-left'}`}>
//                                         <div className=" size-12 rounded-full bg-[#059669] flex items-center justify-center text-white text-sm font-bold z-10">
//                                             {step.id.toString().padStart(3, '')}
//                                         </div>
//                                         <h3 className="text-3xl font-semibold text-[#065F46]">
//                                             {step.title}
//                                         </h3>
//                                         <p className="text-[#6B7280] text-xl font-medium">
//                                             {step.description}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

'use client';
import React from 'react';
import PenIcon from './penIcon';
import SettingIcon from './settingIcon';
import EmailIcon from './EmailIcon';

export default function HowItWorks() {
    const steps = [
        {
            id: 1,
            title: 'Create an Offer',
            description: 'Start with AI or manual input based on your service',
            icon: <PenIcon />,
        },
        {
            id: 2,
            title: 'Customize Resources & Margins',
            description: 'Add materials, set hourly rates, adjust profit margins',
            icon: <SettingIcon />,
        },
        {
            id: 3,
            title: 'Send Offer to Customer',
            description: 'Export as PDF or send via email. No customer login needed',
            icon: <EmailIcon />,
        },
    ];

    return (
        <div className="px-4 sm:px-8 lg:px-16 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 font-semibold text-[#4B5563] text-center">
                How It Works
            </h1>

            <div className="container mx-auto">
                {/* Mobile Timeline */}
                <div className="md:hidden relative">
                    <div className="absolute left-6 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
                    <div className="space-y-12 pl-12">
                        {steps.map((step) => (
                            <div key={step.id} className="relative">
                                <div className="absolute -left-12 top-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                                    {step.id.toString().padStart(2, '0')}
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                    <div className="mb-4 flex justify-center">{step.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:block relative">
                    {/* Continuous vertical line in middle */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`flex items-center gap-20 min-h-[400px] ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Icon Side (alternates) */}
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                                    <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                        <div className="w-16 h-16 flex items-center justify-center">{step.icon}</div>
                                    </div>
                                </div>

                                {/* Center Indicator */}
                                <div className="relative w-0 flex justify-center">
                                    <div className="absolute h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold z-10">
                                        {step.id.toString().padStart(2, '0')}
                                    </div>
                                </div>

                                {/* Text Side (alternates) */}
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                                    <div
                                        className={`max-w mx-auto space-y-2 ${
                                            step.id === 2 ? 'flex flex-col items-end text-right' : 'text-left'
                                        }`}
                                    >
                                        <div className="size-12 rounded-full bg-[#059669] flex items-center justify-center text-white text-sm font-bold z-10">
                                            {step.id.toString().padStart(2, '0')}
                                        </div>
                                        <h3 className="text-3xl font-semibold text-[#065F46]">{step.title}</h3>
                                        <p className="text-[#6B7280] text-xl font-medium">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
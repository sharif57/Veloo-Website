'use client';
import React, { useState } from 'react'
import { Button } from './ui/button'
import Hero from './Hero';



export default function Projects() {
    const [isActive, setIsActive] = useState(1);

    // All taps and Components
    const tabsAndComponents = [
        {
            id: 1,
            label: 'Project',
            content: <Hero/>,
        },
        {
            id: 2,
            label: 'Quote',
            content: <div>About Content</div>,
        },
        {
            id: 3,
            label: 'Communication',
            content: <div>Support Content</div>,
        },
        {
            id: 4,
            label: 'Payment',
            content: <div>New Tab Content</div>,
        },
        {
            id: 5,
            label: 'Materials',
            content: <div>New Tab Content</div>,
        }
    ];

    return (
        <div className='bg-white p-6 m-4 rounded-lg shadow-md container mx-auto h-screen'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold text-[#022C22]'>Renovatiion of terrace - 12A Angle Road</h1>
                <Button className='bg-[#ecfdf5] rounded-full text-lg font-normal px-8 py-5 text-[#10B981] border border-[#10B981] hover:bg-[#ecfdf5] cursor-pointer  '>Confirmed</Button>
            </div>
            <div className='mt-6'>
                <ul className='flex items-center gap-5 '>
                    {
                        tabsAndComponents.map((tab) => (
                            <li
                                key={tab.id}
                                className={`${isActive === tab.id && '!border-[#059669] !text-[#059669]'
                                    } px-6 py-2 border-b dark:text-[#abc2d3] text-[#424242] transition duration-300 border-transparent cursor-pointer`}
                                onClick={() => setIsActive(tab.id)}> {tab.label}
                            </li>
                        ))
                    }

                </ul>
                <div className='mt-4'>
                    {tabsAndComponents.find(tab => tab.id === isActive)?.content}
                </div>
            </div>
        </div>
    )
}

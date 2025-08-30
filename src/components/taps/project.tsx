import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Label } from '@radix-ui/react-label'
import Image from 'next/image'

export default function Project() {
    return (
        <div className='space-y-6'>
            <div className='lg:flex w-full items-center  gap-6 lg:space-y-0 space-y-4 '>
                <div className='border-[#9CA3AF] border-2 rounded-md px-5 py-6 lg:w-4/5'>
                    <div className='flex justify-between items-center'>
                        <div className='space-y-2'>
                            <p className='text-lg font-normal text-[#6B7280]'>Status</p>
                            <h1 className='text-xl font-semibold text-[#022C22]'>Planned</h1>
                            <p className='text-lg font-normal text-[#6B7280]'>Expected start date </p>
                            <h1 className='text-xl font-semibold text-[#022C22]'>August 14, 2025</h1>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-lg font-normal text-[#6B7280]'>Status</p>
                            <h1 className='text-xl font-semibold text-[#022C22]'>Planned</h1>
                            <p className='text-lg font-normal text-[#6B7280]'>Expected start date </p>
                            <h1 className='text-xl font-semibold text-[#022C22]'>August 14, 2025</h1>
                        </div>
                    </div>
                </div>
                <div className='border-[#9CA3AF] border-2 rounded-md px-5 py-6 lg:w-1/5 space-y-2'>
                    <h1 className='text-[#022C22] text-xl font-semibold'>Timeline</h1>
                    <div className='flex items-center gap-2'>
                        <Checkbox id="timeline" />
                        <Label htmlFor="timeline" className="text-xl font-normal text-[#6B7280]">Preparation</Label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Checkbox id="timeline" />
                        <Label htmlFor="timeline" className="text-xl font-normal text-[#6B7280]">Construction</Label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Checkbox id="timeline" />
                        <Label htmlFor="timeline" className="text-xl font-normal text-[#6B7280]">Finishing touches</Label>
                    </div>

                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='border-[#9CA3AF] border-2 rounded-md px-5 py-6 w-1/3 space-y-2 '>
                    <h1 className='text-[#022C22] text-xl font-semibold'>Timeline</h1>
                    <p className='text-lg font-normal text-[#6B7280]'>Eddy Chark</p>
                    <p className='text-lg font-normal text-[#6B7280]'>12A Angle Road </p>
                    <p className='text-lg font-normal text-[#6B7280]'>01928376233</p>
                    <p className='text-lg font-normal text-[#6B7280]'>wdddy,vkeark @gmail.com</p>
                    <p className='text-lg font-normal text-[#6B7280]'>gate closed</p>
                </div>
                <div className='space-y-4 '>
                    <h1 className='text-[#022C22] text-xl font-semibold'>Timeline</h1>
                    <Image src="/image/pdf.png" alt="Project Image" width={500} height={300} />
                </div>
            </div>

        </div>
    )
}

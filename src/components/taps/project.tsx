import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Label } from '@radix-ui/react-label'
import Image from 'next/image'
import { useGetOfferQuery } from '@/redux/feature/chatSlice'
import { useSearchParams } from 'next/navigation'

export default function Project({ id }: any) {
    // const params = useSearchParams();
    // const id = params.get('offer_id')
    // console.log(id)

    // const { data: user } = useUserProfileQuery(undefined);
    const { data } = useGetOfferQuery(id);
    console.log(data, 'my offers')
    return (
        <div className='space-y-6'>

            <div>
                <div className='lg:flex w-full items-center  gap-6 lg:space-y-0 space-y-4 '>
                    <div className='border-[#9CA3AF] border-2 rounded-md px-5 py-6 lg:w-4/5'>
                        <div className='flex justify-between items-center'>
                            <div className='space-y-2'>
                                <p className='text-lg font-normal text-[#6B7280]'>Status</p>
                                <h1 className='text-xl font-semibold text-[#022C22]'>{data?.status || ''}</h1>
                                <p className='text-lg font-normal text-[#6B7280]'>Expected start date </p>
                                <h1 className='text-xl font-semibold text-[#022C22]'>{data?.time || ''}</h1>
                            </div>
                            {/* <div className='space-y-2'>
                                <p className='text-lg font-normal text-[#6B7280]'>Status</p>
                                <h1 className='text-xl font-semibold text-[#022C22]'>Planned</h1>
                                <p className='text-lg font-normal text-[#6B7280]'>Expected start date </p>
                                <h1 className='text-xl font-semibold text-[#022C22]'>August 14, 2025</h1>
                            </div> */}

                        </div>
                        <div className='text-center mt-3 flex justify-center items-center gap-4'><span className='text-xl font-medium text-[#6B7280]'>Latest Update</span>     <span className='text-xl font-medium text-[#022C22]'>Project starts on {data?.time} - {data?.status}</span> </div>
                    </div>

                </div>
                <div className='lg:flex items-center justify-between'>
                    <div className='border-[#9CA3AF] border-2 rounded-md px-5 py-6 lg:w-1/3 space-y-2  '>
                        <h1 className='text-[#022C22] text-xl font-semibold'>Client Information</h1>
                        <p className='text-lg font-normal text-[#6B7280]'>{data?.customer_name || ''}</p>
                        <p className='text-lg font-normal text-[#6B7280]'>{data?.address || ''}</p>
                        <p className='text-lg font-normal text-[#6B7280]'>{data?.phone_number || ''}</p>
                        {/* <p className='text-lg font-normal text-[#6B7280]'>wdddy,vkeark @gmail.com</p> */}
                        <p className='text-lg font-normal text-[#6B7280]'>{data?.resource || ''}</p>
                    </div>
                    <div className='space-y-4 lg:mt-0 mt-4'>
                        <h1 className='text-[#022C22] text-xl font-semibold '>Timeline</h1>
                        <Image src="/image/pdf.png" alt="Project Image" width={500} height={300} />
                    </div>
                </div>
            </div>



            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-4 mt-8'>

                <div className='bg-[#D1FAE5] space-y-4 p-4 rounded-md flex flex-col items-center'>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 21.4V2.6C4.5 2.26863 4.76863 2 5.1 2H16.7515C16.9106 2 17.0632 2.06321 17.1757 2.17574L20.3243 5.32426C20.4368 5.43679 20.5 5.5894 20.5 5.74853V21.4C20.5 21.7314 20.2314 22 19.9 22H5.1C4.76863 22 4.5 21.7314 4.5 21.4Z" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.5 10L16.5 10" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.5 18L16.5 18" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.5 14L12.5 14" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.5 2V5.4C16.5 5.73137 16.7686 6 17.1 6H20.5" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>


                    <p className='text-2xl text-[#047857] font-medium'>Generate Invoice</p>
                </div>
                <div className='bg-[#D1FAE5] space-y-4 p-4 rounded-md flex flex-col items-center'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 11H14.5H17" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 7H14.5H17" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 15V3.6C8 3.26863 8.26863 3 8.6 3H20.4C20.7314 3 21 3.26863 21 3.6V17C21 19.2091 19.2091 21 17 21V21" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 15H8H12.4C12.7314 15 13.0031 15.2668 13.0298 15.5971C13.1526 17.1147 13.7812 21 17 21H8H6C4.34315 21 3 19.6569 3 18V17C3 15.8954 3.89543 15 5 15Z" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>


                    <p className='text-2xl text-[#047857] font-medium'>Generate Bill Material</p>
                </div>
                <div className='bg-[#D1FAE5] space-y-4 p-4 rounded-md flex flex-col items-center'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 9L12 12.5L17 9" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="#047857" strokeWidth="1.5" />
                    </svg>

                    <p className='text-2xl text-[#047857] font-medium'>Chat with Customer</p>
                </div>
            </div>

        </div>
    )
}

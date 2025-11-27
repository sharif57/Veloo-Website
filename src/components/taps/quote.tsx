import { useGetOfferQuery } from '@/redux/feature/chatSlice';
import Image from 'next/image'
import React from 'react'

export default function Quote({ id }: any) {
    const { data } = useGetOfferQuery(id);
    console.log(data, 'my offers')
    return (
        <div>
            <Image src="/image/pdf1.png" alt="Quote" height={1000} width={1000} className='w-full' />
        </div>
    )
}

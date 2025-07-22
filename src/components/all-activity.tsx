import React from 'react'

interface Props {
    count: number,
    title: string
}

export default function AllActivity() {


    const AllActivitys: Props[] = [
        {
            count: 1524,
            title: "All Activity"
        },
        {
            count: 154846,
            title: "Offer Created"
        },
        {
            count: 522,
            title: "Users Online Now"
        },
    ]
 

  return (
    <div className='container mx-auto p-4'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 text-center '>
        {AllActivitys.map((allActivity) => (
            <div key={allActivity.title} className='bg-white p-4 py-8 space-y-4 rounded-lg cursor-copy' title={allActivity.title}>
                <h1 className='text-5xl font-semibold text-[#374151]'>{allActivity.count}</h1>
                <p className='text-xl font-medium text-[#374151]'>{allActivity.title}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

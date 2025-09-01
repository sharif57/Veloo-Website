'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';

export default function SupplierList() {
    const [suppliers, setSuppliers] = useState([
        { id: 1, name: 'Annette Black', image: '/image/profile.png' },
        { id: 2, name: 'Darlene Robertson', image: '/image/profile.png' },
        { id: 3, name: 'Jane Cooper', image: '/image/profile.png' },
    ]);





    return (
        <div className=" bg-white rounded-lg pb-8">
            <div className="container  mx-auto  p-4 md:p-6 ">
                <h2 className="text-lg md:text-xl font-semibold text-gray-700 py-6  bg-[#ECFDF5] px-4 rounded-t-lg mb-10">Suppliers</h2>
                <div className="space-y-2 lg:w-1/4">
                    {suppliers.map((supplier) => (
                        <div
                            key={supplier.id}
                            className="flex items-center p-3 bg-[#D1FAE5] cursor-pointer rounded-lg hover:bg-green-100 transition-colors duration-200"
                        >
                            <Image
                                src={supplier.image}
                                alt={supplier.name}
                                width={40}
                                height={40}
                                className="rounded-full mr-3"
                            />
                            <span className="text-gray-800 font-medium">{supplier.name}</span>
                        </div>
                    ))}
                </div>

                <div className='flex justify-end mt-10'>
                    <Link  href={'/settings/suppliers/add-supplier'}>
                        <Button
                            type="submit"
                            className="bg-[#059669] text-white cursor-pointer  py-6 rounded-lg hover:bg-[#059669] transition-colors duration-200 flex items-center gap-2"
                        >
                            <Plus className="h-5 w-5" />
                            Add Supplier
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
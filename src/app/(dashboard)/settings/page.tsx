'use client'

import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function MenuItems() {
    const menuItems = [
        {
            name: 'Account Information',
            href: '/settings/profile',
        },
        {
            name: 'Revenue Settings',
            href: '/settings/revenue',
        },
        {
            name: 'Suppliers',
            href: '/settings/suppliers',
        },
        {
            name: 'Change Password',
            href: '/settings/password',
        }
        // 'Account Information',
        // 'Revenue Settings',
        // 'Suppliers',
        // 'Change Password',
    ]

    return (
        <div className=" p-4 sm:p-6">
            <div className="container mx-auto">
                <div className=" p-0 sm:p-6 ">
                    {menuItems.map((item, index) => (
                        <Link href={item.href}
                            key={index}
                            className="flex items-center justify-between cursor-pointer bg-[#D1FAE5] rounded-lg p-6 mb-3 last:mb-0 hover:bg-green-200 transition-colors duration-200"
                        >
                            <div className="text-green-700 text-base  sm:text-lg font-semibold">{item.name}</div>
                            <ChevronRight className="text-green-700 size-8" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
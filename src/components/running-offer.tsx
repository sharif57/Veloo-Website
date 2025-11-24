'use client';
import React from 'react'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, User, Package, Clock, DollarSign, Clock3 } from 'lucide-react'

import Link from 'next/link'
interface Task {
    id: string
    title: string
    category: string
    location: string
    resource: string
    materialsOrdered: boolean
    estimatedTime: string
    totalPrice: string
    scheduledDate: string
    completed: boolean
}

const mockTasks: Task[] = [
    {
        id: '#1201',
        title: 'Install Ceiling Fan',
        category: 'Upcoming June-After July',
        location: '34 Elm Street, NY',
        resource: 'Esther Howard',
        materialsOrdered: true,
        estimatedTime: '1.5 hours',
        totalPrice: '$200',
        scheduledDate: '05-07-2026 10:00 (27-07-2026 16:00)',
        completed: false,
    },
    {
        id: '#1202',
        title: 'Fix Plumbing',
        category: 'Ongoing',
        location: '45 Oak Avenue, NY',
        resource: 'John Doe',
        materialsOrdered: false,
        estimatedTime: '2 hours',
        totalPrice: '$150',
        scheduledDate: '01-09-2025 09:00 (01-09-2025 11:00)',
        completed: false,
    },
]

export default function RunningOffer() {
    return (
        <div >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-6">
                <h1 className="text-2xl sm:text-3xl font-semibold text-[#4B5563] mt-8 sm:mt-0">
                    Running Offers
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {
                    mockTasks.map((task) => (
                        <Card className="bg-card border-[#059669] shadow-sm hover:shadow-md transition-shadow hover:duration-300 cursor-pointer">
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-start gap-2">
                                    <CardTitle className="text-lg sm:text-xl font-medium text-[#4B5563]">
                                        Task {task.id} - {task.title}
                                    </CardTitle>
                                </div>
                                <p className="text-sm sm:text-base flex items-center gap-2 text-[#4B5563] font-normal">
                                    <Clock3 className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                                    Scheduled: {task.scheduledDate}
                                </p>
                            </CardHeader>

                            <CardContent className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Calendar className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="text-base sm:text-lg font-medium text-[#6B7280]">
                                        Categorize:
                                    </span>
                                    <span className="text-sm sm:text-base font-normal text-muted-foreground">
                                        {task.category}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="text-base sm:text-lg font-medium text-[#6B7280]">
                                        Location:
                                    </span>
                                    <span className="text-sm sm:text-base font-normal text-muted-foreground">
                                        {task.location}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="text-base sm:text-lg font-medium text-[#6B7280]">
                                        Resource:
                                    </span>
                                    <span className="text-sm sm:text-base font-normal text-muted-foreground">
                                        {task.resource}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Package className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="text-base sm:text-lg font-medium text-[#6B7280]">
                                        Materials ordered:
                                    </span>
                                    <Badge variant={task.materialsOrdered ? 'default' : 'secondary'} className="text-xs">
                                        {task.materialsOrdered ? 'Yes' : 'No'}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="text-base sm:text-lg font-medium text-[#6B7280]">
                                        Estimated Time:
                                    </span>
                                    <span className="text-sm sm:text-base font-normal text-muted-foreground">
                                        {task.estimatedTime}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <DollarSign className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="text-base sm:text-lg font-medium text-[#6B7280]">
                                        Total Price:
                                    </span>
                                    <span className="text-sm sm:text-base font-normal text-muted-foreground">
                                        {task.totalPrice}
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    {/* View Offer Button */}
                                    <Link href={'/offers/projects'} className="flex-1">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full gap-2 text-[#047857] font-semibold py-4 sm:py-6 bg-[#D1FAE5] hover:text-white hover:bg-[#047857]"
                                        >
                                            View Offer
                                        </Button>
                                    </Link>

                                    {/* Completed Button */}
                                    <div className="flex-1">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full gap-2 text-[#ffffff] font-semibold py-4 sm:py-6 bg-[#059669] hover:bg-[#047857] hover:text-white"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4 sm:w-5 sm:h-5"
                                            >
                                                <path
                                                    d="M2 12.5L6.07574 16.5757C6.31005 16.8101 6.68995 16.8101 6.92426 16.5757L9.5 14"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M16.5 7L12.5 11"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M7.5 12L12.0757 16.5757C12.3101 16.8101 12.6899 16.8101 12.9243 16.5757L22.5 7"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            Completed
                                        </Button>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, User, Package, Clock, DollarSign, Clock3 } from 'lucide-react'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'

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

export default function Calendars() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

    const slots = [
        '10:00 AM',
        '11:00 AM',
        '12:00 AM',
        '4:00 PM',
        '5:00 PM',
    ]

    const handleSlotSelect = (slot: string) => {
        setSelectedSlot(slot === selectedSlot ? null : slot)
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

    const handleViewOffer = (taskId: string) => {
        console.log(`Viewing offer for task ${taskId}`)
        // Add logic to view offer details
    }

    const handleCompleteTask = (taskId: string) => {
        console.log(`Marking task ${taskId} as completed`)
        // Add logic to mark task as completed
    }

    return (
        <div className="min-h-screen     p-4 sm:p-6">
            <div className="mx-auto container flex flex-col lg:flex-row justify-between gap-6">
                {/* Calendar Section */}
                <div className="w-full lg:w-1/3">
                    <Card className="bg-white border-gray-200 shadow-sm ">
                        <CardContent className="p-4 ">
                            <CalendarComponent
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md  border w-full bg-white shadow-sm"
                                captionLayout="dropdown"

                            />
                        </CardContent >
                    </Card>
                    <div>
                        <div className="mt-8">
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h2 className="text-xl font-semibold text-gray-700 mb-4">Available Slot</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
                                    {slots.map((slot) => (
                                        <button
                                            key={slot}
                                            onClick={() => handleSlotSelect(slot)}
                                            className={'bg-[#D1FAE5] py-4 px-2   text-lg font-semibold text-[#047857] rounded-lg cursor-pointer hover:bg-opacity-30 transition-colors duration-300 ' + (selectedSlot === slot ? 'bg-[#e0faef] ' : '')}
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Task List Section */}
                <div className="w-full lg:w-2/4 space-y-4">
                    {mockTasks.map((task) => (
                        <Card
                            key={task.id}
                            className="bg-white border-emerald-500 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <CardHeader className="pb-3">
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                                    <CardTitle className="text-lg sm:text-xl font-medium text-gray-700">
                                        Task {task.id} - {task.title}
                                    </CardTitle>
                                </div>
                                <p className="text-sm flex items-center gap-2 text-gray-600">
                                    <Clock3 className="text-emerald-600 w-4 h-4" />
                                    Scheduled: {task.scheduledDate}
                                </p>
                            </CardHeader>

                            <CardContent className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Calendar className="text-emerald-600 w-4 h-4" />
                                    <span className="text-sm font-medium text-gray-700">Category:</span>
                                    <span className="text-sm text-gray-600">{task.category}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="text-emerald-600 w-4 h-4" />
                                    <span className="text-sm font-medium text-gray-700">Location:</span>
                                    <span className="text-sm text-gray-600">{task.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="text-emerald-600 w-4 h-4" />
                                    <span className="text-sm font-medium text-gray-700">Resource:</span>
                                    <span className="text-sm text-gray-600">{task.resource}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Package className="text-emerald-600 w-4 h-4" />
                                    <span className="text-sm font-medium text-gray-700">Materials Ordered:</span>
                                    <Badge
                                        variant={task.materialsOrdered ? 'default' : 'secondary'}
                                        className="text-xs"
                                    >
                                        {task.materialsOrdered ? 'Yes' : 'No'}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="text-emerald-600 w-4 h-4" />
                                    <span className="text-sm font-medium text-gray-700">Estimated Time:</span>
                                    <span className="text-sm text-gray-600">{task.estimatedTime}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <DollarSign className="text-emerald-600 w-4 h-4" />
                                    <span className="text-sm font-medium text-gray-700">Total Price:</span>
                                    <span className="text-sm text-gray-600">{task.totalPrice}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="flex-1  text-emerald-700 font-semibold lg:py-6 py-4 bg-emerald-100 hover:text-white hover:bg-emerald-600 transition-colors"
                                        onClick={() => handleViewOffer(task.id)}
                                    >
                                        View Offer
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="flex-1 text-white font-semibold lg:py-6 py-4 bg-emerald-600 hover:bg-emerald-700 transition-colors"
                                        onClick={() => handleCompleteTask(task.id)}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 25 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4 mr-2"
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
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
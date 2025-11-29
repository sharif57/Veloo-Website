// components/TaskCard.tsx
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
    Calendar, 
    MapPin, 
    User, 
    Package, 
    Clock, 
    DollarSign, 
    Clock3,
    FileText 
} from 'lucide-react';
import Link from 'next/link';
import { Task } from './types/task';

interface TaskCardProps {
    task: Task;
    status: string;
}

export default function TaskCard({ task, status }: TaskCardProps) {
    const formatPrice = (price: number) => `$${price.toLocaleString()}`;

    return (
        <Card className="bg-card border-[#059669] shadow-sm hover:shadow-md transition-shadow hover:duration-300 cursor-pointer">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-lg sm:text-xl font-medium text-[#4B5563] max-w-[70%] line-clamp-2">
                        {task.task_description.length > 80 
                            ? `${task.task_description.substring(0, 80)}...` 
                            : task.task_description
                        }
                    </CardTitle>
                    <Badge variant="default" className="bg-[#059669] text-white text-xs">
                        {task.status}
                    </Badge>
                </div>
                <p className="text-sm sm:text-base flex items-center gap-2 text-[#4B5563] font-normal">
                    <Clock3 className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="truncate">{task.time}</span>
                </p>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                    <User className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-base sm:text-lg font-medium text-[#6B7280] truncate">
                        Customer:
                    </span>
                    <span className="text-sm sm:text-base font-normal text-muted-foreground truncate max-w-[120px]">
                        {task.customer_name}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-base sm:text-lg font-medium text-[#6B7280] truncate">
                        Location:
                    </span>
                    <span className="text-sm sm:text-base font-normal text-muted-foreground truncate max-w-[120px]">
                        {task.address}
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
                    <Badge 
                        variant={task.materials_ordered ? 'default' : 'secondary'} 
                        className="text-xs ml-1"
                    >
                        {task.materials_ordered ? 'Yes' : 'No'}
                    </Badge>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-base sm:text-lg font-medium text-[#6B7280]">
                        Estimated Time:
                    </span>
                    <span className="text-sm sm:text-base font-normal text-muted-foreground">
                        {task.time}
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                        <DollarSign className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm font-medium text-[#6B7280]">
                            Total:
                        </span>
                        <span className="text-sm font-semibold text-[#059669]">
                            {formatPrice(task.price.Total)}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <DollarSign className="text-[#059669] w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm font-medium text-[#6B7280]">
                            Labor:
                        </span>
                        <span className="text-sm font-semibold text-[#059669]">
                            {formatPrice(task.price.Labor)}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href={`/dashboard/${task.id}`} className="flex-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full gap-2 text-[#047857] font-semibold py-4 sm:py-6 bg-[#D1FAE5] hover:text-white hover:bg-[#047857] transition-all"
                        >
                            <FileText className="w-4 h-4" />
                            View Details
                        </Button>
                    </Link>
                    {status === 'Pending' && (
                        <Button
                            size="sm"
                            className="flex-1 gap-2 text-white font-semibold py-4 sm:py-6 bg-[#059669] hover:bg-[#047857] transition-all"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
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
                            Accept Offer
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, User, Package, Clock, DollarSign, CheckCircle2, Eye, Clock3 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu' // Assuming these are from a UI library like shadcn/ui
import Filter from './icon/filter'

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
    completed: false
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
    completed: false
  },
  // Add more tasks as needed
]

const sidebarItems = [
  { label: "Today's Task", active: true },
  { label: "Upcoming Tasks", active: false },
  { label: "Ongoing Tasks", active: false },
  { label: "New Tasks", active: false }
]

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Upcoming June-After July', value: 'Upcoming June-After July' },
  { label: 'Ongoing', value: 'Ongoing' },
  { label: 'Materials Ordered', value: 'materialsOrdered' },
  { label: 'Completed', value: 'completed' }
]

export default function TaskDashboard() {
  const [activeSection, setActiveSection] = useState("Today's Task")
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filteredTasks = mockTasks.filter(task => {
    if (selectedFilter === 'all') return true
    if (selectedFilter === 'materialsOrdered') return task.materialsOrdered
    if (selectedFilter === 'completed') return task.completed
    return task.category === selectedFilter
  })

  return (
    <div className="flex min-h-screen bg-background">


      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row  items-start sm:items-center gap-8 mb-6">
            <h1 className="text-3xl font-semibold text-[#4B5563] mt-12 md:mt-0">
              {activeSection}
            </h1>
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 border-[#10B981] bg-[#d1fae6] cursor-pointer text-lg text-[#059669] font-semibold py-5 px-6">
                  <Filter />

                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Filter Tasks</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {filterOptions.map(option => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setSelectedFilter(option.value)}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Task Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {filteredTasks.slice(0, 2).map((task, index) => (
              <TaskCard key={`today-${index}`} task={task} />
            ))}
          </div>

          {/* Weekly Tasks Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">Weekly Task</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredTasks.slice(2, 4).map((task, index) => (
                <TaskCard key={`weekly-${index}`} task={task} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TaskCard({ task }: { task: Task }) {
  return (
    <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-xl font-medium text-[#4B5563] ">
            Task {task.id} - {task.title}
          </CardTitle>
        </div>
        <p className="text-[16px] flex items-center gap-2 text-[#4B5563] font-normal">
          <Clock3 className='text-[#059669]' />
          Scheduled: {task.scheduledDate}
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Category */}
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-card-foreground">Categorize:</span>
          <span className="text-sm text-muted-foreground">{task.category}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-card-foreground">Location:</span>
          <span className="text-sm text-muted-foreground">{task.location}</span>
        </div>

        {/* Resource */}
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-card-foreground">Resource:</span>
          <span className="text-sm text-muted-foreground">{task.resource}</span>
        </div>

        {/* Materials */}
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-card-foreground">Materials ordered:</span>
          <Badge variant={task.materialsOrdered ? "default" : "secondary"} className="text-xs">
            {task.materialsOrdered ? "Yes" : "No"}
          </Badge>
        </div>

        {/* Estimated Time */}
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-card-foreground">Estimated Time:</span>
          <span className="text-sm text-muted-foreground">{task.estimatedTime}</span>
        </div>

        {/* Total Price */}
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-card-foreground">Total Price:</span>
          <span className="text-sm text-muted-foreground">{task.totalPrice}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6 pt-4">
          <Button variant="ghost" size="sm" className="flex-1 cursor-pointer gap-2 text-[#047857] font-semibold py-6 bg-[#D1FAE5]">
            View Offer
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 cursor-pointer gap-2 text-[#ffffff] font-semibold py-6 bg-[#059669] hover:bg-[#047857] hover:text-white">
            View Offer
          </Button>

        </div>
      </CardContent>
    </Card>
  )
}
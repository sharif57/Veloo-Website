'use client';

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

export default function OfferForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    address: '',
    projectStart: 'ASAP',
    task: 'Windows/doors',
  })

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission (placeholder)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add generate offer logic here
  }

  return (
    <>
      <head>
        <title>Generate Offer - Task Management</title>
        <meta name="description" content="Create a new offer for a task" />
      </head>
      <div className="  p-4 sm:p-6 flex items-center justify-start">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Customer Name */}
            <div>
              <label htmlFor="customerName" className="block text-sm sm:text-base font-medium text-gray-700">
                Customer Name
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Enter customer name"
                className="mt-1 w-full p-2 sm:p-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] text-sm sm:text-base"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm sm:text-base font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="mt-1 w-full p-2 sm:p-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] text-sm sm:text-base"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm sm:text-base font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="mt-1 w-full p-2 sm:p-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] text-sm sm:text-base"
              />
            </div>

            {/* Project Start */}
            <div>
              <label htmlFor="projectStart" className="block text-sm sm:text-base font-medium text-gray-700">
                Project Start
              </label>
              <select
                id="projectStart"
                name="projectStart"
                value={formData.projectStart}
                onChange={handleChange}
                className="mt-1 w-full p-2 sm:p-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] text-sm sm:text-base"
              >
                <option value="ASAP">ASAP</option>
                <option value="2025-09-01">2025-09-01</option>
                <option value="2025-09-15">2025-09-15</option>
              </select>
            </div>

            {/* Select Task */}
            <div>
              <label htmlFor="task" className="block text-sm sm:text-base font-medium text-gray-700">
                Select Task
              </label>
              <select
                id="task"
                name="task"
                value={formData.task}
                onChange={handleChange}
                className="mt-1 w-full p-2 sm:p-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] text-sm sm:text-base"
              >
                <option value="Windows/doors">Windows/doors</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
              </select>
            </div>

            {/* Generate Offer Button */}
            <Link href={'/offers/message'}>
              <Button
                type="submit"
                className="w-full bg-[#059669] text-white hover:bg-[#047857] rounded-lg p-2 sm:p-6     text-sm sm:text-base font-semibold"
              >
                Generate Offer
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}
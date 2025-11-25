'use client';

import { use, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { useGenerateOfferMutation } from '@/redux/feature/chatSlice';
import { useUserProfileQuery } from '@/redux/feature/userSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { aiResponse } from '@/redux/feature/authUISlice';

export default function OfferForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    address: '',
    explaination: '',
    projectStart: 'ASAP',
    task: 'Windows/doors',
  })
  const dispatch = useDispatch();
  const { data } = useUserProfileQuery(undefined);
  // console.log(data?.data?.user?.user_id, 'profile')
  const [generateOffer] = useGenerateOfferMutation();

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  // {
  //   "customer_name": "string",
  //   "phone_number": "string",
  //   "address": "string",
  //   "project_start": "string",
  //   "select_task": "string",
  //   "explaination": "string",
  //   "user_id": "string",
  //   "timestamp": "2025-11-25T03:58:51.337Z"
  // }
  // Handle form submission (placeholder)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await generateOffer({
        customer_name: formData.customerName,
        phone_number: formData.phoneNumber,
        address: formData.address,
        project_start: formData.projectStart,
        select_task: formData.task,
        explaination: formData.explaination,
        user_id: data?.data?.user?.user_id.toString(),
        timestamp: new Date().toISOString(),
      }).unwrap();
      console.log(res, 'res');
      toast.success(res?.message || "Offer generated successfully! Please wait for the customer to accept or reject the offer.");
      dispatch(aiResponse(res));
      router.push(`/offers/message?offer_id=${res.id}`);
      setLoading(false);
    } catch (error: any) {
      console.log(error)
      toast.error(error?.data?.detail || "Failed to generate offer. Please try again.");
      setLoading(false);
    }
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
                required
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
                required
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
                required
              />
            </div>

            {/* Explaination */}
            <div>
              <label htmlFor="explaination" className="block text-sm sm:text-base font-medium text-gray-700">
                Explaination
              </label>
              <textarea
                id="explaination"
                name="explaination"
                value={formData.explaination}
                onChange={handleChange}
                placeholder="Enter explaination"
                className="mt-1 w-full p-2 sm:p-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] text-sm sm:text-base"
                required
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
                required
              >
                <option value="ASAP">ASAP</option>
                <option value="2025-09-01">1-3 Weeks</option>
                <option value="2025-09-15">3 months</option>
                <option value="2025-09-15">6 months</option>
                <option value="2025-09-15">1 year</option>
                <option value="2025-09-15">Other</option>
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
                required
              >
                <option value="Windows/doors">Windows/doors</option>
                <option value="Plumbing">Garage</option>
                <option value="Electrical">Isolation</option>
                <option value="Electrical">Roofine</option>
                <option value="Electrical">Flooring</option>
                <option value="Electrical">House extension</option>
                <option value="Electrical">Kitchen</option>
              </select>
            </div>

            {/* Generate Offer Button */}
            {/* <Link href={'/offers/message'}> */}
            {/* <Link href={'/offers/projects'}> */}
            <Button
              type="submit"
              disabled={!formData.customerName || !formData.phoneNumber || !formData.address || !formData.explaination || !formData.projectStart || !formData.task}
              className="w-full bg-[#059669] text-white hover:bg-[#047857] rounded-lg p-2 sm:p-6 text-sm sm:text-base font-semibold"
            >
              {loading ? 'Generating Offer...' : 'Generate Offer'}
            </Button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </>
  )
}
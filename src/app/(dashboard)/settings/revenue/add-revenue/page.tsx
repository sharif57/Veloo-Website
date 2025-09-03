
'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function AddSupplier() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addToCalendar, setAddToCalendar] = useState(false);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [availabilityDays, setAvailabilityDays] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    // Toggle availability days
    const toggleDay = (day: string) => {
        setAvailabilityDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Validate form
        if (!name || !email || !role || !phoneNumber || !startTime || !endTime) {
            alert('Please fill all required fields.');
            setLoading(false);
            return;
        }
        // Simulate API call
        setTimeout(() => {
            console.log({
                name,
                email,
                role,
                phoneNumber,
                addToCalendar,
                startTime,
                endTime,
                availabilityDays,
            });
            setLoading(false);
            // Reset form and navigate back
            setName('');
            setEmail('');
            setRole('');
            setPhoneNumber('');
            setAddToCalendar(false);
            setStartTime('');
            setEndTime('');
            setAvailabilityDays([]);
            router.back();
        }, 1000);
    };

    const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    return (
        <div className="  p-4 sm:p-6">
            <div className="container mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-700 py-4 sm:py-6 bg-[#ECFDF5] px-4 rounded-t-lg mb-6 sm:mb-10">
                        Add New Resource
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-semibold text-gray-700">
                  Name
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 h-5 w-5" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter the name of the resource"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-12 h-12 bg-gray-50 border-gray-300 rounded-lg text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-semibold text-gray-700">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 h-5 w-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter the email of the supplier"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12 bg-gray-50 border-gray-300 rounded-lg text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="text-lg font-semibold text-gray-700">
                  Role
                </Label>
                <Input
                  id="role"
                  type="text"
                  placeholder="Specify the role or type of resource"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="pl-4 h-12 bg-gray-50 border-gray-300 rounded-lg text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-lg font-semibold text-gray-700">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter the resource's phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="pl-4 h-12 bg-gray-50 border-gray-300 rounded-lg text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={addToCalendar}
                  onCheckedChange={(checked) => setAddToCalendar(checked === true)}
                />
                <h1 className="text-lg font-semibold text-[#374151]">Add to Calendar</h1>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-[#374151] mb-2">Availability</h1>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="start-time" className="text-sm text-gray-600">
                      Start Time
                    </label>
                    <input
                      type="time"
                      id="start-time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="border border-[#9CA3AF] rounded-lg p-2 sm:p-3 w-full"
                    />
                  </div>
                  <span className="mt-6 text-gray-700 font-medium">To</span>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="end-time" className="text-sm text-gray-600">
                      End Time
                    </label>
                    <input
                      type="time"
                      id="end-time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="border border-[#9CA3AF] rounded-lg p-2 sm:p-3 w-full"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-[400px] mt-8">
                  <div className="flex justify-between gap-2 items-center bg-[#D1FAE5] rounded-md p-2">
                    {days.map((day, index) => (
                      <button
                        key={index}
                        className={`flex-1 text-center text-gray-700 text-sm sm:text-base font-medium py-1 sm:py- px-1 rounded-md hover:bg-green-200 transition-colors duration-200 ${
                          availabilityDays.includes(day) ? ' border-2 border-[#059669]' : ''
                        }`}
                        onClick={() => toggleDay(day)}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <Button
                type="button"
                onClick={() => {
                  setName('');
                  setEmail('');
                  setRole('');
                  setPhoneNumber('');
                  setAddToCalendar(false);
                  setStartTime('');
                  setEndTime('');
                  setAvailabilityDays([]);
                  router.back();
                }}
                className="bg-[#D1FAE5] w-[180px] text-[#047857] py-3 sm:py-6 rounded-lg hover:bg-[#059669] hover:text-white transition-colors duration-200 flex items-center justify-center"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#059669] w-[180px] text-white py-3 sm:py-6 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {loading ? 'Adding...' : 'Add Resource'}
              </Button>
            </div>
          </form>
                </div>
            </div>
        </div>
    );
}
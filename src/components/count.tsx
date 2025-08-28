import React from 'react'
import Tasks from './icon/Tasks'

export default function Count() {
  return (
    <div>
      <div className="p-1 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
        {/* Card 1 */}
        <div className="bg-white flex items-center gap-4 rounded-xl shadow-md px-4 py-6">
          <div className="bg-[#e0faef] rounded-2xl p-3 sm:p-4">
            <Tasks />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#374151]">
              125 ($5000)
            </h1>
            <p className="text-base sm:text-lg font-normal text-[#4B5563]">
              Upcoming Tasks
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white flex items-center gap-4 rounded-xl shadow-md px-4 py-6">
          <div className="bg-[#e0faef] rounded-2xl p-3 sm:p-4">
            <Tasks />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#374151]">
              125 ($5000)
            </h1>
            <p className="text-base sm:text-lg font-normal text-[#4B5563]">
              Upcoming Tasks
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white flex items-center gap-4 rounded-xl shadow-md px-4 py-6">
          <div className="bg-[#e0faef] rounded-2xl p-3 sm:p-4">
            <Tasks  />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#374151]">
              125 ($5000)
            </h1>
            <p className="text-base sm:text-lg font-normal text-[#4B5563]">
              Upcoming Tasks
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

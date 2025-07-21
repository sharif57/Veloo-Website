"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "./Logo"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-6 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center gap-20 ">
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-[#6B7280] text-lg hover:text-gray-900 font-medium transition-colors">
                Services
              </a>
              <a href="#" className="text-[#6B7280] text-lg hover:text-gray-900 font-medium transition-colors">
                Prices
              </a>
              <a href="#" className="text-[#6B7280] text-lg hover:text-gray-900 font-medium transition-colors">
                About Us
              </a>
              <a href="#" className="text-[#6B7280] text-lg hover:text-gray-900 font-medium transition-colors">
                Support
              </a>
            </nav>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-[#047857] text-lg cursor-pointer bg-[#D1FAE5] hover:text-[#047857] hover:bg-gray-50 font-medium px-6 py-6"
            >
              Sign In
            </Button>
            <Button className="bg-[#059669] text-lg hover:bg-[#059669] text-white font-medium px-6 py-6 rounded-md transition-colors">
              Create free account
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors rounded-md"
              >
                Services
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors rounded-md"
              >
                Prices
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors rounded-md"
              >
                About Us
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors rounded-md"
              >
                Support
              </a>
              <div className="pt-4 pb-2 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium justify-start"
                >
                  Sign In
                </Button>
                <Button className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-medium justify-start">
                  Create free account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

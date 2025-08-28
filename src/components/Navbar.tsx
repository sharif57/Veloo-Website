// "use client"

// import { useState } from "react"
// import { Menu, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Logo from "./Logo"
// import Link from "next/link"
// import AuthModal from "./authModal/authModal"

// export function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const [authModalOpen, setAuthModalOpen] = useState(false)

//   const menus = [
//     {
//       name: "Services",
//       url: "#"
//     },
//     {
//       name: "Prices",
//       url: "#"
//     },
//     {
//       name: "About Us",
//       url: "#"
//     },
//     {
//       name: "Support",
//       url: "/support"
//     },
//     {
//       name: "Subscriptions",
//       url: "/subscriptions"
//     }
//   ]

//   return (
//     <header className="w-full py-6 ">
//       <div className="w-[83%] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between ">
//           {/* Logo */}
//           <div className="flex items-center gap-20 ">
//             <Link href="/" className="flex items-center space-x-2 cursor-pointer" title="Veloo">
//               <Logo />
//             </Link>
//             <nav className="hidden md:flex items-center space-x-8">
//               {
//                 menus.map((menu) => (
//                   <Link
//                     key={menu.name}
//                     href={menu.url}
//                     title={menu.name}
//                     className="text-[#6B7280] text-lg hover:text-gray-900 font-medium transition-colors"                  >
//                     {menu.name}
//                   </Link>
//                 ))
//               }

//             </nav>
//           </div>

//           {/* Desktop Auth Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button
//               title='Sign In'
//               variant="ghost"
// className="text-[#047857] text-lg cursor-pointer bg-[#D1FAE5] hover:text-[#047857] hover:bg-gray-50 font-medium px-6 py-6"
//               onClick={() => setAuthModalOpen(true)}

//             >
//               Sign In
//             </Button>
//             <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />


// <Button
//   title='Create free account'
// className="bg-[#059669] cursor-pointer text-lg hover:bg-[#059669] text-white font-medium px-6 py-6 rounded-md transition-colors">
//   Create free account
// </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-600 hover:text-gray-900"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
//               <a
//                 href="#"
//                 className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors rounded-md"
//               >
//                 Services
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors rounded-md"
//               >
//                 Prices
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors rounded-md"
//               >
//                 About Us
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors rounded-md"
//               >
//                 Support
//               </a>
//               <div className="pt-4 pb-2 space-y-2">
//                 <Button
//                   variant="ghost"
//                   className="w-full text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium justify-start"
//                 >
//                   Sign In
//                 </Button>
//                 <Button className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-medium justify-start">
//                   Create free account
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }
"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "./Logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import AuthModal from "./authModal/authModal"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const pathname = usePathname()

  const menus = [
    { name: "Services", url: "/services" },
    { name: "Prices", url: "/prices" },
    { name: "About Us", url: "/about" },
    { name: "Support", url: "/support" },
    // { name: "Subscriptions", url: "/subscriptions" },
  ]

  return (
    <header className="w-full py-4 bg-white    sticky top-0 z-50 mb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex   items-center justify-between">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center space-x-2" title="Veloo" aria-label="Home">
              <Logo />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.url}
                  title={menu.name}
                  className={`text-base font-medium transition-colors duration-200 ${pathname === menu.url
                    ? "text-[#059669] border-b-2 border-[#059669]"
                    : "text-gray-600 hover:text-[#059669]"
                    }`}
                >
                  {menu.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              title="Sign In"
              variant="ghost"
              className="text-[#047857] text-lg cursor-pointer bg-[#D1FAE5] hover:text-[#047857] hover:bg-gray-50 font-medium px-6 py-6"

              onClick={() => setAuthModalOpen(true)}
            >
              Sign In
            </Button>
            <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
            <Button
              title="Create free account"
              className="bg-[#059669] cursor-pointer text-lg hover:bg-[#059669] text-white font-medium px-6 py-6 rounded-md transition-colors"

            >
              Create free account
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#059669] transition-colors duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-50">
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-100">
                <Link href="/" className="flex items-center space-x-2" title="Veloo" onClick={() => setIsMenuOpen(false)}>
                  <Logo />
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-[#059669]"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Sidebar Menu */}
              <nav className="flex-1 p-4 space-y-2">
                {menus.map((menu) => (
                  <Link
                    key={menu.name}
                    href={menu.url}
                    title={menu.name}
                    className={`block px-4 py-2 text-lg font-medium rounded-md transition-colors duration-200 ${pathname === menu.url
                      ? "text-[#059669] bg-[#D1FAE5]"
                      : "text-gray-600 hover:text-[#059669] hover:bg-[#D1FAE5]"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menu.name}
                  </Link>
                ))}
              </nav>

              {/* Sidebar Auth Buttons */}
              <div className="p-4 border-t border-gray-100 space-y-3">
                <Button
                  variant="ghost"
                  className="text-[#047857] w-full text-lg cursor-pointer bg-[#D1FAE5] hover:text-[#047857] hover:bg-gray-50 font-medium px-6 py-6"
                  onClick={() => {
                    setAuthModalOpen(true)
                    setIsMenuOpen(false)
                  }}
                >
                  Sign In
                </Button>
                <Button
                  className="w-full bg-[#059669] text-white text-lg font-medium hover:bg-[#047857] justify-start py-6 text-center rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create free account
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Overlay for Mobile Sidebar */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-background/10 backdrop-blur-md bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  )
}
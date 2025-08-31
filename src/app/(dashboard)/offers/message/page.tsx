// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Send } from "lucide-react"
// import { toast } from "sonner"
// // import { useToast } from "@/hooks/use-toast"

// interface FormData {
//   customerName: string
//   address: string
//   taskDescription: string
//   billOfMaterials: string
//   time: string
//   price: string
// }

// interface ChatMessage {
//   id: string
//   text: string
//   sender: "user" | "support"
//   timestamp: Date
// }

// export default function ServiceRequestPage() {
//   // const { toast } = useToast()
//   const [formData, setFormData] = useState<FormData>({
//     customerName: "John Doe",
//     address: "34 Elm Street, NY",
//     taskDescription:
//       "Customer wants the ceiling fan installed in the living room near the entrance. Please ensure no damage to the wall during installation",
//     billOfMaterials:
//       "Lorem ipsum dolor sit amet consectetur. Ac turpis ullamcorper lacus tristique pharetra eget erat massa gravida.",
//     time: "1.5 hour",
//     price: "$200",
//   })

//   const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
//     {
//       id: "1",
//       text:` <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
//           <CardContent className="p-6 space-y-6">
//             <div className="flex items-center gap-2 mb-6">
//               <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
//               <h1 className="text-xl font-semibold text-gray-900">Service Request</h1>
//             </div>

//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="customerName" className="text-sm font-medium text-gray-700">
//                   Customer Name
//                 </Label>
//                 <Input
//                   id="customerName"
//                   value={formData.customerName}
//                   onChange={(e) => handleInputChange("customerName", e.target.value)}
//                   className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="address" className="text-sm font-medium text-gray-700">
//                   Address
//                 </Label>
//                 <Input
//                   id="address"
//                   value={formData.address}
//                   onChange={(e) => handleInputChange("address", e.target.value)}
//                   className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="taskDescription" className="text-sm font-medium text-gray-700">
//                   Task Description
//                 </Label>
//                 <Textarea
//                   id="taskDescription"
//                   value={formData.taskDescription}
//                   onChange={(e) => handleInputChange("taskDescription", e.target.value)}
//                   className="min-h-[100px] border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="billOfMaterials" className="text-sm font-medium text-gray-700">
//                   Bill of Materials
//                 </Label>
//                 <Textarea
//                   id="billOfMaterials"
//                   value={formData.billOfMaterials}
//                   onChange={(e) => handleInputChange("billOfMaterials", e.target.value)}
//                   className="min-h-[80px] border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="time" className="text-sm font-medium text-gray-700">
//                     Time
//                   </Label>
//                   <Input
//                     id="time"
//                     value={formData.time}
//                     onChange={(e) => handleInputChange("time", e.target.value)}
//                     className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="price" className="text-sm font-medium text-gray-700">
//                     Price
//                   </Label>
//                   <Input
//                     id="price"
//                     value={formData.price}
//                     onChange={(e) => handleInputChange("price", e.target.value)}
//                     className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
//                   />
//                 </div>
//               </div>

//               <Button
//                 onClick={handleSaveChanges}
//                 className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition-colors"
//               >
//                 Save Changes
//               </Button>
//             </div>
//           </CardContent>
//         </Card>`,
//       sender: "support",
//       timestamp: new Date(),
//     },
//   ])
//   console.log(chatMessages)

//   const [newMessage, setNewMessage] = useState("")

//   const handleInputChange = (field: keyof FormData, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }))
//   }

//   const handleSaveChanges = () => {
//     // Simulate saving changes
//     toast.success("Changes saved successfully")
//   }

//   const handleSendMessage = () => {
//     if (!newMessage.trim()) return

//     const userMessage: ChatMessage = {
//       id: Date.now().toString(),
//       text: newMessage,
//       sender: "user",
//       timestamp: new Date(),
//     }

//     setChatMessages((prev) => [...prev, userMessage])
//     setNewMessage("")

//     // Simulate support response
//     setTimeout(() => {
//       const supportMessage: ChatMessage = {
//         id: (Date.now() + 1).toString(),
//         text: "Thank you for your message. I'll help you with that right away.",
//         sender: "support",
//         timestamp: new Date(),
//       }
//       setChatMessages((prev) => [...prev, supportMessage])
//     }, 1000)
//   }

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault()
//       handleSendMessage()
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4 md:p-6">
//       <div className="mx-auto max-w-6xl space-y-6">
//         {/* Service Request Form */}


//         {/* Chat Interface */}
//         <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
//           <CardContent className="p-6">
//             <div className="space-y-4">
//               {/* Chat Messages */}
//               <div className="space-y-3 max-h-screen overflow-y-auto">
//                 {chatMessages.map((message) => (
//                   <div
//                     key={message.id}
//                     className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
//                   >
//                     {message.sender === "support" && (
//                       <Avatar className="w-8 h-8 flex-shrink-0">
//                         <AvatarImage src="/support-agent.png" />
//                         <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">SA</AvatarFallback>
//                       </Avatar>
//                     )}
//                     <div
//                       className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${message.sender === "support"
//                           ? "bg-emerald-500 text-white rounded-bl-md"
//                           : "bg-gray-100 text-gray-900 rounded-br-md"
//                         }`}
//                     >
//                       {message.text}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Chat Input */}
//               <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
//                 <Input
//                   placeholder="How can I help you?"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   className="flex-1 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-full px-4"
//                 />
//                 <Button
//                   onClick={handleSendMessage}
//                   size="icon"
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full w-10 h-10 flex-shrink-0"
//                 >
//                   <Send className="w-4 h-4" />
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"
import { toast } from "sonner"

interface FormData {
  customerName: string
  address: string
  taskDescription: string
  billOfMaterials: string
  time: string
  price: string
}

interface ChatMessage {
  id: string
  content: string | React.ReactNode // Support both text and JSX
  sender: "user" | "support"
  timestamp: Date
}

export default function ServiceRequestPage() {
  const [formData, setFormData] = useState<FormData>({
    customerName: "John Doe",
    address: "34 Elm Street, NY",
    taskDescription:
      "Customer wants the ceiling fan installed in the living room near the entrance. Please ensure no damage to the wall during installation",
    billOfMaterials:
      "Lorem ipsum dolor sit amet consectetur. Ac turpis ullamcorper lacus tristique pharetra eget erat massa gravida.",
    time: "1.5 hour",
    price: "$200",
  })

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: (
       <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <h1 className="text-xl font-semibold text-gray-900">Service Request</h1>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="customerName" className="text-sm font-medium text-gray-700">
                  Customer Name
                </Label>
                <Input
                  id="customerName"
                  value={formData.customerName}
                  onChange={(e) => handleInputChange("customerName", e.target.value)}
                  className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                  Address
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="taskDescription" className="text-sm font-medium text-gray-700">
                  Task Description
                </Label>
                <Textarea
                  id="taskDescription"
                  value={formData.taskDescription}
                  onChange={(e) => handleInputChange("taskDescription", e.target.value)}
                  className="min-h-[100px] border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="billOfMaterials" className="text-sm font-medium text-gray-700">
                  Bill of Materials
                </Label>
                <Textarea
                  id="billOfMaterials"
                  value={formData.billOfMaterials}
                  onChange={(e) => handleInputChange("billOfMaterials", e.target.value)}
                  className="min-h-[80px] border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-sm font-medium text-gray-700">
                    Time
                  </Label>
                  <Input
                    id="time"
                    value={formData.time}
                    onChange={(e) => handleInputChange("time", e.target.value)}
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price" className="text-sm font-medium text-gray-700">
                    Price
                  </Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <Button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      ),
      sender: "support",
      timestamp: new Date(),
    },
  ])

  const [newMessage, setNewMessage] = useState("")

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSaveChanges = () => {
    toast.success("Changes saved successfully")
    // Update chat with new form data summary
    const summaryCard = (
      <Card className="shadow-lg border-0  backdrop-blur-sm">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <h1 className="text-xl font-semibold text-gray-900">Service Request</h1>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="customerName" className="text-sm font-medium text-gray-700">
                  Customer Name
                </Label>
                <Input
                  id="customerName"
                  value={formData.customerName}
                  onChange={(e) => handleInputChange("customerName", e.target.value)}
                  className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                  Address
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="taskDescription" className="text-sm font-medium text-gray-700">
                  Task Description
                </Label>
                <Textarea
                  id="taskDescription"
                  value={formData.taskDescription}
                  onChange={(e) => handleInputChange("taskDescription", e.target.value)}
                  className="min-h-[100px] border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="billOfMaterials" className="text-sm font-medium text-gray-700">
                  Bill of Materials
                </Label>
                <Textarea
                  id="billOfMaterials"
                  value={formData.billOfMaterials}
                  onChange={(e) => handleInputChange("billOfMaterials", e.target.value)}
                  className="min-h-[80px] border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-sm font-medium text-gray-700">
                    Time
                  </Label>
                  <Input
                    id="time"
                    value={formData.time}
                    onChange={(e) => handleInputChange("time", e.target.value)}
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price" className="text-sm font-medium text-gray-700">
                    Price
                  </Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <Button
                onClick={handleSaveChanges}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
    )
    setChatMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        content: summaryCard,
        sender: "support",
        timestamp: new Date(),
      },
    ])
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setChatMessages((prev) => [...prev, userMessage])
    setNewMessage("")

    // Simulate support response
    setTimeout(() => {
      const supportMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for your message. I'll help you with that right away.",
        sender: "support",
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, supportMessage])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className=" p-4 md:p-6">
      <div className="mx-auto max-w-6xl space-y-6">

        {/* Chat Interface */}
        <Card className=" border-0  ">
          <CardContent className="p-6 ">
            <div className="space-y-4">
              {/* Chat Messages */}
              <div className="space-y-3 max-h-screen  overflow-y-auto">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {message.sender === "support" && (
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarImage src="/support-agent.png" />
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">SA</AvatarFallback>
                      </Avatar>
                    )}
                    <div className="max-w-[80%]">
                      {typeof message.content === "string" ? (
                        <div
                          className={`px-4 py-2 rounded-2xl text-sm ${
                            message.sender === "support"
                              ? "bg-emerald-500 text-white rounded-bl-md"
                              : "bg-gray-100 text-gray-900 rounded-br-md"
                          }`}
                        >
                          {message.content}
                        </div>
                      ) : (
                        message.content
                      )}
                    </div>
                  </div>
                ))}
              </div>


              {/* Chat Input */}  
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <Input
                  placeholder="How can I help you?"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-full px-4"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full w-10 h-10 flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
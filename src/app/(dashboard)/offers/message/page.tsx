
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Send } from "lucide-react";
// import { toast } from "sonner";
// import ChatLog from "@/components/icon/chatLog";
// import Link from "next/link";
// import { useSelector } from "react-redux";

// interface FormData {
//   customerName: string;
//   address: string;
//   taskDescription: string;
//   billOfMaterials: string;
//   time: string;
//   price: string;
// }

// interface ChatMessage {
//   id: string;
//   content: string | React.ReactNode;
//   sender: "user" | "support";
//   timestamp: Date;
// }

// function ChatInput({
//   onSubmit,
//   placeholder = "Ask me anything about business...",
//   disabled = false,
// }: {
//   onSubmit: (value: string) => void;
//   placeholder?: string;
//   disabled?: boolean;
// }) {
//   const [inputValue, setInputValue] = useState("");
//   const textareaRef = useRef<HTMLTextAreaElement>(null);

//   const aiMessage = useSelector((state: any) => state.authUI.aiResponse);
//   console.log(aiMessage, "aiResponse===");


//   useEffect(() => {
//     const textarea = textareaRef.current;
//     if (textarea) {
//       textarea.style.height = "auto";
//       textarea.style.height = `${Math.min(Math.max(textarea.scrollHeight, 48), 120)}px`;
//     }
//   }, [inputValue]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!inputValue.trim() || disabled) return;

//     onSubmit(inputValue.trim());
//     setInputValue("");
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
//     }
//   };

//   return (
//     <div className="px-4 py-2    ">
//       <form onSubmit={handleSubmit} className="relative">
//         <Textarea
//           ref={textareaRef}
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder={placeholder}
//           disabled={disabled}
//           className="
//             w-full text-black  bg-white placeholder-gray-500 rounded-xl border border-gray-300
//             px-4 py-6 resize-none transition-all duration-200
//             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
//             disabled:opacity-50 disabled:cursor-not-allowed
//             scrollbar-hidden
//           "
//           style={{
//             minHeight: "90px",
//             maxHeight: "120px",
//           }}
//         />
//         <Button
//           type="submit"
//           disabled={!inputValue.trim() || disabled}
//           className="
//             absolute right-2 bottom-2 p-2 rounded-full
//             bg-emerald-600 text-white hover:bg-emerald-700
//             disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
//           "
//         >
//           <Send className="h-4 w-4" />
//         </Button>
//       </form>
//     </div>
//   );
// }

// function ServiceRequestForm({
//   formData,
//   handleInputChange,
//   handleSaveChanges,
// }: {
//   formData: FormData;
//   handleInputChange: (field: keyof FormData, value: string) => void;
//   handleSaveChanges: () => void;
// }) {


//   const aiMessage = useSelector((state: any) => state.authUI.aiResponse);
//   console.log(aiMessage, "aiResponse===");

//   return (
//     <Card className="border-emerald-500 bg-white/80 backdrop-blur-sm">
//       <CardContent className="p-4 sm:p-6 space-y-4">
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="customerName" className="text-sm font-medium text-gray-700">
//               Customer Name
//             </Label>
//             <Input
//               id="customerName"
//               defaultValue={formData.customerName || aiMessage?.customer_name}
//               onChange={(e) => handleInputChange("customerName", e.target.value)}
//               className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="address" className="text-sm font-medium text-gray-700">
//               Address
//             </Label>
//             <Input
//               id="address"
//               defaultValue={formData.address}
//               onChange={(e) => handleInputChange("address", e.target.value)}
//               className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="taskDescription" className="text-sm font-medium text-gray-700">
//               Task Description
//             </Label>
//             <Textarea
//               id="taskDescription"
//               defaultValue={formData.taskDescription}
//               onChange={(e) => handleInputChange("taskDescription", e.target.value)}
//               className="min-h-[80px] border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="billOfMaterials" className="text-sm font-medium text-gray-700">
//               Bill of Materials
//             </Label>
//             <Textarea
//               id="billOfMaterials"
//               defaultValue={formData.billOfMaterials}
//               onChange={(e) => handleInputChange("billOfMaterials", e.target.value)}
//               className="min-h-[80px] border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="time" className="text-sm font-medium text-gray-700">
//                 Time
//               </Label>
//               <Input
//                 id="time"
//                 defaultValue={formData.time}
//                 onChange={(e) => handleInputChange("time", e.target.value)}
//                 className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="price" className="text-sm font-medium text-gray-700">
//                 Price
//               </Label>
//               <Input
//                 id="price"
//                 defaultValue={formData.price}
//                 onChange={(e) => handleInputChange("price", e.target.value)}
//                 className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
//               />
//             </div>
//           </div>

//           {/* <Link href="/offers/projects" className="w-full"> */}
//             <Button
//               onClick={handleSaveChanges}
//               className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-lg transition-colors"
//             >
//               Save Changes
//             </Button>
//           {/* </Link> */}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default function ServiceRequestPage() {


//   const aiMessage = useSelector((state: any) => state.authUI.aiResponse);
//   console.log(aiMessage, "aiResponse===");

//   const [formData, setFormData] = useState<FormData>({
//     customerName: aiMessage?.customer_name || "John Doe",
//     address: aiMessage?.address,
//     taskDescription:
//       aiMessage?.task_description || '',
//     billOfMaterials:
//       "Lorem ipsum dolor sit amet consectetur. Ac turpis ullamcorper lacus tristique pharetra eget erat massa gravida.",
//     time: aiMessage?.time,
//     price: aiMessage?.price?.Total || 0,
//   });

//   const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
//     {
//       id: "1",
//       content: <ServiceRequestForm formData={formData} handleInputChange={handleInputChange} handleSaveChanges={handleSaveChanges} />,
//       sender: "support",
//       timestamp: new Date(),
//     },
//   ]);

//   const chatContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const chatContainer = chatContainerRef.current;
//     if (chatContainer) {
//       chatContainer.scrollTop = chatContainer.scrollHeight;
//     }
//   }, [chatMessages]);

//   function handleInputChange(field: keyof FormData, value: string) {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   }

//   function handleSaveChanges() {
//     toast.success("Changes saved successfully");
//     setChatMessages((prev) => [
//       ...prev,
//       {
//         id: Date.now().toString(),
//         content: <ServiceRequestForm formData={formData} handleInputChange={handleInputChange} handleSaveChanges={handleSaveChanges} />,
//         sender: "support",
//         timestamp: new Date(),
//       },
//     ]);
//   }

//   function handleSendMessage(message: string) {
//     const userMessage: ChatMessage = {
//       id: Date.now().toString(),
//       content: message,
//       sender: "user",
//       timestamp: new Date(),
//     };

//     setChatMessages((prev) => [...prev, userMessage]);

//     setTimeout(() => {
//       const supportMessage: ChatMessage = {
//         id: (Date.now() + 1).toString(),
//         content: <ServiceRequestForm formData={formData} handleInputChange={handleInputChange} handleSaveChanges={handleSaveChanges} />,
//         sender: "support",
//         timestamp: new Date(),
//       };
//       setChatMessages((prev) => [...prev, supportMessage]);
//     }, 1000);
//   }

//   return (
//     <div className="flex flex-col min-h-screen ">
//       <div className="flex-1 p- sm:p-6 overflow-hidden">
//         <div className="mx-auto max-w-4xl h-full flex flex-col">
//           <Card className=" backdrop-blur-sm flex-1 flex flex-col">
//             <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
//               <div
//                 ref={chatContainerRef}
//                 className="flex-1 space-y-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
//               >
//                 {chatMessages.map((message) => (
//                   <div
//                     key={message.id}
//                     className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
//                   >
//                     {message.sender === "support" && (
//                       <Avatar className="w-8 h-8 flex-shrink-0">
//                         <AvatarImage src="/support-agent.png" alt="Support Agent" />
//                         <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs"><ChatLog /></AvatarFallback>
//                       </Avatar>
//                     )}
//                     <div className="max-w-[85%] sm:max-w-[70%]">
//                       {typeof message.content === "string" ? (
//                         <div
//                           className={`px-4 py-2 rounded-2xl text-sm ${message.sender === "support"
//                             ? "bg-emerald-500 text-white rounded-bl-none"
//                             : "bg-[#059669] text-white rounded-br-none"
//                             }`}
//                         >
//                           {message.content}
//                         </div>
//                       ) : (
//                         message.content
//                       )}
//                       <div className="text-xs text-gray-500 mt-1 mb-8">
//                         {message.timestamp.toLocaleTimeString()}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//       <div className="fixed bottom-0 lg:w-[48%] w-[90%] lg:left-[58%] left-[50%] transform -translate-x-1/2 z-10 ">
//         <ChatInput
//           onSubmit={handleSendMessage}
//           placeholder="Ask me anything about business..."
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send } from "lucide-react";
import { toast } from "sonner";
import ChatLog from "@/components/icon/chatLog";
import ReactMarkdown from "react-markdown";
import { useGetOfferQuery, useSaveOfferMutation, useUpdateGeneratedOfferMutation } from "@/redux/feature/chatSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { useUserProfileQuery } from "@/redux/feature/userSlice";

interface FormData {
  customerName: string;
  address: string;
  taskDescription: string;
  billOfMaterials: string;
  time: string;
  price: string | number;
}

interface ChatMessage {
  id: string;
  content: string | React.ReactNode;
  sender: "user" | "support";
  timestamp: Date;
}

function ChatInput({
  onSubmit,
  placeholder = "Ask me anything about business...",
  disabled = false,
}: {
  onSubmit: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}) {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const searchParams = useSearchParams();
  const offerId = searchParams.get("offer_id");
  console.log(offerId)
  const [updateGeneratedOffer] = useUpdateGeneratedOfferMutation();

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(Math.max(textarea.scrollHeight, 48), 120)}px`;
    }
  }, [inputValue]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await updateGeneratedOffer({ offer_id: offerId || "", user_message: inputValue }).unwrap();
      console.log(res, 'update offer')
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }

    if (!inputValue.trim() || disabled) return;
    onSubmit(inputValue.trim());
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <div className="px-4 py-2">
      <form onSubmit={handleSubmit} className="relative">
        <Textarea
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="
            w-full text-black bg-white placeholder-gray-500 rounded-xl border border-gray-300
            px-4 py-6 resize-none transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
            disabled:opacity-50 disabled:cursor-not-allowed
            scrollbar-hidden
          "
          style={{ minHeight: "90px", maxHeight: "120px" }}
        />
        <Button
          type="submit"
          disabled={!inputValue.trim() || disabled}
          className="
            absolute right-2 bottom-2 p-2 rounded-full
            bg-emerald-600 text-white hover:bg-emerald-700
            disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
          "
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}

function ServiceRequestForm({
  formData,
  handleInputChange,
  // handleSaveChanges,
}: {
  formData: FormData;
  handleInputChange: (field: keyof FormData, value: string) => void;
  handleSaveChanges: () => void;
}) {
  const router = useRouter()
  const searchParams = useSearchParams();
  const offerId = searchParams.get("offer_id");
  // console.log(offerId)

  const { data: offers } = useGetOfferQuery(offerId);
  const {data , refetch} = useUserProfileQuery(undefined);
  console.log(data?.data?.user, 'profile+++++++++++++++++++++++++++//')

  const [saveOffer] = useSaveOfferMutation();

  async function handleSaveChanges() {
    if (!offerId) return;

    try {
      const res = await saveOffer({
        customer_name: offer?.customer_name,
        phone_number: offer?.phone_number,
        address: offer?.address,
        task_description: offer?.task_description,
        bill_of_materials: offer?.bill_of_materials,
        time: offer?.time,
        price: offer?.price,
        timestamp: offer?.timestamp,
        offer_id: offer?.id,
        materials_ordered: offer?.materials_ordered,
        resource: offer?.resource,
        user_id: data?.data?.user?.user_id.toString(),

      } ).unwrap();
      console.log(res, 'offer save')

      toast.success("Offer saved successfully!");
      refetch(); // Refresh latest data
      router.push(`/offers/projects?offer_id=${offerId}`)
    } catch (error: any) {
      toast.error(error?.data?.detail || "Failed to save offer");
      console.error(error);
    }
  }

  const { data: offer } = useGetOfferQuery(offerId);
  console.log(offer, 'offer id===========><=====')

  const aiMessage = offer;
  return (
    <Card className="border-emerald-500 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6 space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="customerName" className="text-sm font-medium text-gray-700">
              Customer Name
            </Label>
            <Input
              id="customerName"
              value={aiMessage?.customer_name || formData.customerName}
              onChange={(e) => handleInputChange("customerName", e.target.value)}
              className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-medium text-gray-700">
              Address
            </Label>
            <Input
              id="address"
              value={aiMessage?.address || formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="taskDescription" className="text-sm font-medium text-gray-700">
              Task Description
            </Label>
            <Textarea
              id="taskDescription"
              value={aiMessage?.task_description || formData.taskDescription}
              onChange={(e) => handleInputChange("taskDescription", e.target.value)}
              className="min-h-[80px] border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="billOfMaterials" className="text-sm font-medium text-gray-700">
              Bill of Materials
            </Label>
            <div className="p-2 bg-gray-100 rounded-md border border-gray-300 max-h-60 overflow-y-auto">
              <ReactMarkdown >
                {aiMessage?.bill_of_materials_string || formData.billOfMaterials}
              </ReactMarkdown>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="time" className="text-sm font-medium text-gray-700">
                Time
              </Label>
              <Input
                id="time"
                value={aiMessage?.time || formData.time}
                onChange={(e) => handleInputChange("time", e.target.value)}
                className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price" className="text-sm font-medium text-gray-700">
                Price
              </Label>
              <Input
                id="price"
                value={aiMessage?.price?.Total || formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>

          <Button
            onClick={handleSaveChanges}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-lg transition-colors"
          >
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ServiceRequestPage() {
  const searchParams = useSearchParams();
  const offerId = searchParams.get("offer_id");
  console.log(offerId)

  const { data: offer } = useGetOfferQuery(offerId);
  console.log(offer, 'offer id===========><=====')

  const aiMessage = offer;

  const [updateGeneratedOffer] = useUpdateGeneratedOfferMutation();
  const [formData, setFormData] = useState<FormData>({
    customerName: aiMessage?.customer_name || "John Doe",
    address: aiMessage?.address || "",
    taskDescription: aiMessage?.task_description || "",
    billOfMaterials:
      aiMessage?.bill_of_materials_string ||
      "",
    time: aiMessage?.time || "",
    price: aiMessage?.price?.Total || 0,
  });

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: (
        <ServiceRequestForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSaveChanges={handleSaveChanges}
        />
      ),
      sender: "support",
      timestamp: new Date(),
    },
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [chatMessages]);

  function handleInputChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSaveChanges() {

    const [saveOffer] = useSaveOfferMutation();

    saveOffer({
      data: formData,
      id: offerId
    })
    toast.success("Changes saved successfully");
    setChatMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        content: (
          <ServiceRequestForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSaveChanges={handleSaveChanges}
          />
        ),
        sender: "support",
        timestamp: new Date(),
      },
    ]);
  }

  function handleSendMessage(message: string) {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const supportMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: (
          <ServiceRequestForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSaveChanges={handleSaveChanges}
          />
        ),
        sender: "support",
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, supportMessage]);
    }, 1000);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p- sm:p-6 overflow-hidden">
        <div className="mx-auto max-w-4xl h-full flex flex-col">
          <Card className="backdrop-blur-sm flex-1 flex flex-col">
            <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
              <div
                ref={chatContainerRef}
                className="flex-1 space-y-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
              >
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""
                      }`}
                  >
                    {message.sender === "support" && (
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarImage src="/support-agent.png" alt="Support Agent" />
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">
                          <ChatLog />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className="max-w-[85%] sm:max-w-[70%]">
                      {typeof message.content === "string" ? (
                        <div
                          className={`px-4 py-2 rounded-2xl text-sm ${message.sender === "support"
                            ? "bg-emerald-500 text-white rounded-bl-none"
                            : "bg-[#059669] text-white rounded-br-none"
                            }`}
                        >
                          {message.content}
                        </div>
                      ) : (
                        message.content
                      )}
                      <div className="text-xs text-gray-500 mt-1 mb-8">
                        {message.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="fixed bottom-0 lg:w-[48%] w-[90%] lg:left-[58%] left-[50%] transform -translate-x-1/2 z-10">
        <ChatInput onSubmit={handleSendMessage} placeholder="Ask me anything about business..." />
      </div>
    </div>
  );
}


// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Send } from "lucide-react";
// import { toast } from "sonner";
// import ChatLog from "@/components/icon/chatLog";
// import ReactMarkdown from "react-markdown";
// import {
//   useGetOfferQuery,
//   useSaveOfferMutation,
//   useUpdateGeneratedOfferMutation,
// } from "@/redux/feature/chatSlice";
// import { useSearchParams } from "next/navigation";

// interface FormData {
//   customerName: string;
//   address: string;
//   taskDescription: string;
//   billOfMaterials: string;
//   time: string;
//   price: string | number;
// }

// interface ChatMessage {
//   id: string;
//   content: string | React.ReactNode;
//   sender: "user" | "support";
//   timestamp: Date;
// }

// function ChatInput({
//   onSubmit,
//   placeholder = "Ask me anything about the offer...",
//   disabled = false,
// }: {
//   onSubmit: (value: string) => void;
//   placeholder?: string;
//   disabled?: boolean;
// }) {
//   const [inputValue, setInputValue] = useState("");
//   const textareaRef = useRef<HTMLTextAreaElement>(null);
//   const searchParams = useSearchParams();
//   const offerId = searchParams.get("offer_id");
//   const [updateGeneratedOffer, { isLoading }] = useUpdateGeneratedOfferMutation();

//   useEffect(() => {
//     const textarea = textareaRef.current;
//     if (textarea) {
//       textarea.style.height = "auto";
//       textarea.style.height = `${Math.min(Math.max(textarea.scrollHeight, 48), 120)}px`;
//     }
//   }, [inputValue]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!inputValue.trim() || disabled || isLoading) return;

//     const message = inputValue.trim();
//     onSubmit(message);

//     try {
//       await updateGeneratedOffer({
//         offer_id: offerId || "",
//         user_message: message,
//       }).unwrap();

//       toast.success("Offer updated with your feedback!");
//     } catch (error) {
//       console.error("Failed to update offer:", error);
//       toast.error("Failed to update offer. Please try again.");
//     }

//     setInputValue("");
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSubmit(e as any);
//     }
//   };

//   return (
//     <div className="px-4 py-2 bg-white border-t">
//       <form onSubmit={handleSubmit} className="relative">
//         <Textarea
//           ref={textareaRef}
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder={placeholder}
//           disabled={disabled || isLoading}
//           className="w-full text-black bg-white placeholder-gray-500 rounded-xl border border-gray-300 px-4 py-6 resize-none pr-12 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//           style={{ minHeight: "90px", maxHeight: "120px" }}
//         />
//         <Button
//           type="submit"
//           disabled={!inputValue.trim() || disabled || isLoading}
//           className="absolute right-2 bottom-2 p-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 disabled:bg-gray-300"
//         >
//           <Send className="h-4 w-4" />
//         </Button>
//       </form>
//     </div>
//   );
// }

// function ServiceRequestForm({
//   formData,
//   onInputChange,
//   onSave,
//   isLoading = false,
// }: {
//   formData: FormData;
//   onInputChange: (field: keyof FormData, value: string) => void;
//   onSave: () => void;
//   isLoading?: boolean;
// }) {
//   return (
//     <Card className="border-emerald-500 bg-white/90 backdrop-blur-sm shadow-lg">
//       <CardContent className="p-6 space-y-5">
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="customerName">Customer Name</Label>
//             <Input
//               id="customerName"
//               value={formData.customerName}
//               onChange={(e) => onInputChange("customerName", e.target.value)}
//               className="border-gray-300 focus:border-emerald-500"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="address">Address</Label>
//             <Input
//               id="address"
//               value={formData.address}
//               onChange={(e) => onInputChange("address", e.target.value)}
//               className="border-gray-300 focus:border-emerald-500"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="taskDescription">Task Description</Label>
//             <Textarea
//               id="taskDescription"
//               value={formData.taskDescription}
//               onChange={(e) => onInputChange("taskDescription", e.target.value)}
//               className="min-h-[100px] resize-none"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label>Bill of Materials</Label>
//             <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 max-h-64 overflow-y-auto text-sm">
//               <ReactMarkdown>{formData.billOfMaterials}</ReactMarkdown>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="time">Estimated Time</Label>
//               <Input
//                 id="time"
//                 value={formData.time}
//                 onChange={(e) => onInputChange("time", e.target.value)}
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="price">Total Price</Label>
//               <Input
//                 id="price"
//                 value={formData.price}
//                 onChange={(e) => onInputChange("price", e.target.value)}
//               />
//             </div>
//           </div>

//           <Button
//             onClick={onSave}
//             disabled={isLoading}
//             className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3"
//           >
//             {isLoading ? "Saving..." : "Save Changes"}
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default function ServiceRequestPage() {
//   const searchParams = useSearchParams();
//   const offerId = searchParams.get("offer_id");

//   const { data: offer, isLoading: loadingOffer, refetch } = useGetOfferQuery(offerId!, {
//     skip: !offerId,
//   });
//   console.log(offer,'offer')

//   const [saveOffer, { isLoading: savingOffer }] = useSaveOfferMutation();
//   const [updateGeneratedOffer] = useUpdateGeneratedOfferMutation();

//   const [formData, setFormData] = useState<FormData>({
//     customerName: "",
//     address: "",
//     taskDescription: "",
//     billOfMaterials: "",
//     time: "",
//     price: "",
//   });

//   const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
//   const chatContainerRef = useRef<HTMLDivElement>(null);

//   // Sync formData when offer loads or updates
//   useEffect(() => {
//     if (offer) {
//       const updatedData: FormData = {
//         customerName: offer.customer_name || "",
//         address: offer.address || "",
//         taskDescription: offer.task_description || "",
//         billOfMaterials: offer.bill_of_materials_string || "",
//         time: offer.time || "",
//         price: offer.price?.Total || offer.price || "",
//       };
//       setFormData(updatedData);

//       // Add latest AI offer to chat
//       setChatMessages((prev) => {
//         const exists = prev.some((msg) => msg.id === "latest-offer");
//         if (!exists) {
//           return [
//             ...prev,
//             {
//               id: "latest-offer",
//               content: (
//                 <ServiceRequestForm
//                   formData={updatedData}
//                   onInputChange={handleInputChange}
//                   onSave={handleSaveChanges}
//                   isLoading={savingOffer}
//                 />
//               ),
//               sender: "support",
//               timestamp: new Date(),
//             },
//           ];
//         }
//         // Update existing
//         return prev.map((msg) =>
//           msg.id === "latest-offer"
//             ? {
//                 ...msg,
//                 content: (
//                   <ServiceRequestForm
//                     formData={updatedData}
//                     onInputChange={handleInputChange}
//                     onSave={handleSaveChanges}
//                     isLoading={savingOffer}
//                   />
//                 ),
//                 timestamp: new Date(),
//               }
//             : msg
//         );
//       });
//     }
//   }, [offer, savingOffer]);

//   // Auto-scroll to bottom
//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatMessages]);

//   function handleInputChange(field: keyof FormData, value: string | number) {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   }

//   async function handleSaveChanges() {
//     if (!offerId) return;

//     try {
//     const res =   await saveOffer(offer).unwrap();
//     console.log(res,'offer save')

//       toast.success("Offer saved successfully!");
//       refetch(); // Refresh latest data
//     } catch (error) {
//       toast.error("Failed to save offer");
//       console.error(error);
//     }
//   }

//   function handleSendMessage(message: string) {
//     const userMsg: ChatMessage = {
//       id: Date.now().toString(),
//       content: message,
//       sender: "user",
//       timestamp: new Date(),
//     };

//     setChatMessages((prev) => [...prev, userMsg]);

//     // Optional: show "AI is thinking..." temporarily
//     const thinkingMsg: ChatMessage = {
//       id: "thinking",
//       content: <div className="text-gray-500 italic">AI is updating the offer...</div>,
//       sender: "support",
//       timestamp: new Date(),
//     };
//     setChatMessages((prev) => [...prev, thinkingMsg]);

//     // Refetch after update (since updateGeneratedOffer triggers backend regeneration)
//     setTimeout(() => {
//       refetch();
//       setChatMessages((prev) => prev.filter((m) => m.id !== "thinking"));
//     }, 1500);
//   }

//   if (loadingOffer) {
//     return <div className="flex items-center justify-center min-h-screen">Loading offer...</div>;
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <div className="flex-1 overflow-hidden pb-32">
//         <div className="mx-auto max-w-4xl h-full flex flex-col p-4">
//           <Card className="flex-1 flex flex-col bg-transparent shadow-none">
//             <CardContent className="flex-1 flex flex-col p-0">
//               <div
//                 ref={chatContainerRef}
//                 className="flex-1 space-y-6 overflow-y-auto pr-2 pb-4"
//               >
//                 {chatMessages.length === 0 && offer && (
//                   <ServiceRequestForm
//                     formData={formData}
//                     onInputChange={handleInputChange}
//                     onSave={handleSaveChanges}
//                     isLoading={savingOffer}
//                   />
//                 )}
//                 {chatMessages.map((message) => (
//                   <div
//                     key={message.id}
//                     className={`flex items-start gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"
//                       }`}
//                   >
//                     {message.sender === "support" && (
//                       <Avatar className="w-9 h-9">
//                         <AvatarFallback className="bg-emerald-100 text-emerald-700">
//                           <ChatLog />
//                         </AvatarFallback>
//                       </Avatar>
//                     )}
//                     <div className="max-w-xl">
//                       {typeof message.content === "string" ? (
//                         <div
//                           className={`px-5 py-3 rounded-2xl text-sm ${
//                             message.sender === "user"
//                               ? "bg-emerald-600 text-white rounded-br-none"
//                               : "bg-white border border-gray-200 rounded-bl-none shadow-sm"
//                           }`}
//                         >
//                           {message.content}
//                         </div>
//                       ) : (
//                         message.content
//                       )}
//                       <p className="text-xs text-gray-500 mt-1">
//                         {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
//         <div className="max-w-4xl mx-auto">
//           <ChatInput onSubmit={handleSendMessage} disabled={loadingOffer} />
//         </div>
//       </div>
//     </div>
//   );
// }
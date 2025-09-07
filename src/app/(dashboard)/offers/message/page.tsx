
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {  Send } from "lucide-react";
import { toast } from "sonner";
import ChatLog from "@/components/icon/chatLog";
import Link from "next/link";

interface FormData {
  customerName: string;
  address: string;
  taskDescription: string;
  billOfMaterials: string;
  time: string;
  price: string;
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

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(Math.max(textarea.scrollHeight, 48), 120)}px`;
    }
  }, [inputValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="px-4 py-2    ">
      <form onSubmit={handleSubmit} className="relative">
        <Textarea
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="
            w-full text-black  bg-white placeholder-gray-500 rounded-xl border border-gray-300
            px-4 py-6 resize-none transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
            disabled:opacity-50 disabled:cursor-not-allowed
            scrollbar-hidden
          "
          style={{
            minHeight: "90px",
            maxHeight: "120px",
          }}
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
  handleSaveChanges,
}: {
  formData: FormData;
  handleInputChange: (field: keyof FormData, value: string) => void;
  handleSaveChanges: () => void;
}) {
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
              value={formData.customerName}
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
              value={formData.address}
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
              value={formData.taskDescription}
              onChange={(e) => handleInputChange("taskDescription", e.target.value)}
              className="min-h-[80px] border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
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
              className="min-h-[80px] border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="time" className="text-sm font-medium text-gray-700">
                Time
              </Label>
              <Input
                id="time"
                value={formData.time}
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
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>

          <Link href="/offers/projects" className="w-full">
            <Button
              onClick={handleSaveChanges}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-lg transition-colors"
            >
              Save Changes
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
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
  });

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: <ServiceRequestForm formData={formData} handleInputChange={handleInputChange} handleSaveChanges={handleSaveChanges} />,
      sender: "support",
      timestamp: new Date(),
    },
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages]);

  function handleInputChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSaveChanges() {
    toast.success("Changes saved successfully");
    setChatMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        content: <ServiceRequestForm formData={formData} handleInputChange={handleInputChange} handleSaveChanges={handleSaveChanges} />,
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
        content: <ServiceRequestForm formData={formData} handleInputChange={handleInputChange} handleSaveChanges={handleSaveChanges} />,
        sender: "support",
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, supportMessage]);
    }, 1000);
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex-1 p- sm:p-6 overflow-hidden">
        <div className="mx-auto max-w-4xl h-full flex flex-col">
          <Card className=" backdrop-blur-sm flex-1 flex flex-col">
            <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
              <div
                ref={chatContainerRef}
                className="flex-1 space-y-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
              >
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {message.sender === "support" && (
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarImage src="/support-agent.png" alt="Support Agent" />
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs"><ChatLog /></AvatarFallback>
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
      <div className="fixed bottom-0 lg:w-[48%] w-[90%] lg:left-[58%] left-[50%] transform -translate-x-1/2 z-10 ">
        <ChatInput
          onSubmit={handleSendMessage}
          placeholder="Ask me anything about business..."
        />
      </div>
    </div>
  );
}
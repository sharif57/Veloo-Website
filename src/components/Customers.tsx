'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'

import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export default function Customers() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [testimonialText, setTestimonialText] = useState("");
    const handleShare = () => {
        // Handle testimonial submission
        console.log("Testimonial submitted:", testimonialText);
        setTestimonialText("");
        setIsModalOpen(false);
    };

   const testimonials = [
  {
    id: 1,
    title: 'Veloo saved me hours each week — quoting is now the easiest part of my job',
    name: "Sharif Mahamud",
    image: '/image/users.png'
  },
  {
    id: 2,
    title: 'I love that everything is in one place. It’s made my business more organized',
    name: "John Doe",
    image: '/image/users.png'
  },
  {
    id: 3,
    title: 'Veloo has been a game-changer for my business. It’s easy to use and effective',
    name: "Jane Smith",
    image: '/image/users.png'
  },
  {
    id: 4,
    title: 'Veloo has been a game-changer for my business. It’s easy to use and effective',
    name: "Jane Smith",
    image: '/image/users.png'
  },
  {
    id: 5,
    title: 'Veloo has been a game-changer for my business. It’s easy to use and effective',
    name: "Jane Smith",
    image: '/image/users.png'
  },
  {
    id: 6,
    title: 'Veloo has been a game-changer for my business. It’s easy to use and effective',
    name: "Jane Smith",
    image: '/image/users.png'
  }
];


    return (
        <div className=" p-4 container mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl w-full  mx-auto leading-tight font-semibold text-[#4B5563] text-center">
                What Our Customers Say
            </h1>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-12'>
                    {
                        testimonials.map((testimonial) => (
                            <div  key={testimonial.id} className='bg-white p-6 space-y-5 rounded-2xl'>
                                <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.845 27.197V19.199C18.845 14.177 20.023 10.085 22.379 6.923C24.797 3.699 28.362 1.591 33.074 0.598997V6.644C30.966 7.14 29.292 8.07 28.052 9.43399C26.812 10.736 26.006 12.317 25.634 14.177H31.214V27.197H18.845ZM0.0589812 27.197V19.199C0.0589812 14.177 1.23698 10.085 3.59298 6.923C6.01098 3.699 9.54498 1.591 14.195 0.598997V6.644C12.087 7.14 10.413 8.07 9.17298 9.43399C7.93298 10.736 7.12698 12.317 6.75498 14.177H12.335V27.197H0.0589812Z" fill="#059669" />
                                </svg>

                                <p className="text-lg font-medium text-[#6B7280]">{testimonial.title}</p>
                                <div className='flex items-center gap-4'>
                                    <Image src={testimonial.image} width={50} height={50} alt="user" />
                                    <p className="text-lg  font-medium text-[#4B5563]">{testimonial.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex justify-center mt-16 ">
                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} >
                        <DialogTrigger asChild>
                            <Button
                                className="bg-[#059669] cursor-pointer text-white   text-base sm:text-lg font-medium px-4 py-4 sm:px-6 sm:py-6 rounded-md shadow-2xl hover:bg-[#047857] transition-colors  "
                                title="Share Your Thought"
                            >
                                Share Your Thought
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white border border-text rounded-2xl max-w-md mx-auto">
                            <DialogHeader className="flex flex-row items-center justify-between pb-4">
                                <DialogTitle className="text-[#6B7280] text-xl lg:text-[36px] text-center font-medium">
                                    Share your Thought
                                </DialogTitle>
                            </DialogHeader>

                            <div className="space-y-6">
                                <Textarea
                                    placeholder="Start Writing..."
                                    value={testimonialText}
                                    onChange={(e) => setTestimonialText(e.target.value)}
                                    className="min-h-48 bg-[#D1FAE5]   text-black placeholder-white rounded-lg resize-none focus:border-cyan-400 focus:ring-cyan-400"
                                />

                                <Button
                                    onClick={handleShare}
                                    className="w-full bg-[#059669] hover:bg-text text-white font-medium py-5 rounded-lg text-lg transition-all duration-300"
                                    disabled={!testimonialText.trim()}
                                >
                                    Share
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Patel",
    text: "Kattraan.com helped me land my first internship. The resources and mentorship were top-notch!",
    bg: "bg-blue-100",
  },
  {
    name: "Meera Singh",
    text: "As a design student, I found Kattraan's portfolio reviews super insightful. Highly recommended!",
    bg: "bg-green-100",
  },
  {
    name: "Rohan Verma",
    text: "I loved the community vibe on Kattraan. It’s more than just a learning platform—it's a network.",
    bg: "bg-yellow-100",
  },
  {
    name: "Priya Desai",
    text: "The UI/UX courses on Kattraan gave me the confidence to freelance full-time.",
    bg: "bg-pink-100",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1024;

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = () => {
    if (isLargeScreen) {
      return [
        testimonials[index],
        testimonials[(index + 1) % testimonials.length],
        testimonials[(index + 2) % testimonials.length],
      ];
    }
    return [testimonials[index]];
  };

  const display = visibleTestimonials();

  return (
    <div className="w-full max-w-6xl mx-auto my-10 text-center px-4">
      <h2 className="text-4xl font-bold text-blue-800 mb-6">What Students Say About Kattraan</h2>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {display.map((testimonial, i) => (
            <Card key={i} className={`p-6 shadow-xl ${testimonial.bg}`}>
              <CardContent className="text-lg italic mb-4">“{testimonial.text}”</CardContent>
              <div className="font-bold text-right">— {testimonial.name}</div>
            </Card>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-red-800' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialReviews = [
  {
    id: 1,
    name: "Frances Guerrero",
    date: "Jan 19, 2025",
    time: "11:40 AM",
    title: "How to implement cleanup on useEffect",
    content:
      "Satisfied conveying a dependent contented gentleman elsewhere supported do. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Louis Ferguson",
    date: "Jan 20, 2025",
    time: "09:15 AM",
    title: "How does an Angular application work?",
    content:
      "Offended entirely finished you welcome goodness ham. On marrying painted pasture. Satisfied conveying a dependent contented gentleman supported do.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Carolyn Ortiz",
    date: "Jan 21, 2025",
    time: "01:30 PM",
    title: "What is React useEffect and describe any elaborate on its mount and unmount properties?",
    content:
      "Offended entirely finished you welcome goodness ham. On marrying painted pasture. Satisfied conveying a dependent contented gentleman supported do. Warrant private blushes removed an in equally totally if.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Dennis Barrett",
    date: "Jan 22, 2025",
    time: "10:20 AM",
    title: "What are the different data types present in JavaScript?",
    content:
      "Satisfied conveying a dependent contented gentleman supported do. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Carolyn Ortiz",
    date: "Jan 23, 2025",
    time: "04:45 PM",
    title: "What are JavaScript prototypes?",
    content:
      "Satisfied conveying a dependent contented gentleman supported do. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed.",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="text-yellow-400 fill-yellow-400 w-4 h-4" />
      ))}
      {halfStar && <Star className="text-yellow-400 w-4 h-4" />}
    </div>
  );
};

export default function InstructorFeedback() {
  const [reviews, setReviews] = useState(initialReviews);

 ;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-left text-[#0d2b45] p-3">Student Feedback</h2>
        <div className="flex items-center space-x-2">
          <Input placeholder="Search..." className="w-60" />
          
        </div>
      </div>

      {reviews.map((review) => (
        <Card key={review.id}>
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg">{review.name}</div>
                    <p className="text-xs text-gray-500">
                      {review.date} | {review.time}
                    </p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="mt-2 text-lg">{review.title}</p>
                <p className="text-md text-gray-600 mt-1">{review.content}</p>
                
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-between items-center text-sm text-gray-500">
        <p>Showing 1 to 5 of 20 entries</p>
        <div className="space-x-2">
          <Button variant="outline" size="sm">&lt;</Button>
          <Button variant="outline" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">&gt;</Button>
        </div>
      </div>
    </div>
  );
}

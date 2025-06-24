
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Play, Eye, ThumbsUp } from 'lucide-react';

const TrendingReviews = () => {
  const reviews = [
    {
      id: 1,
      title: "2024 Porsche 911 GT3 RS - Track Beast Review",
      type: "Video Review",
      rating: 4.9,
      views: "125K",
      likes: "8.2K",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "12:45",
      reviewer: "SpeedReview",
      category: "Car"
    },
    {
      id: 2,
      title: "Ducati Panigale V4 S - Superbike Perfection",
      type: "Blog Post",
      rating: 4.8,
      views: "89K",
      likes: "5.1K",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reviewer: "BikeGuru",
      category: "Bike"
    },
    {
      id: 3,
      title: "Tesla Model S Plaid vs Lucid Air - EV Showdown",
      type: "Video Review",
      rating: 4.7,
      views: "203K",
      likes: "12.3K",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "18:20",
      reviewer: "EVReviews",
      category: "Car"
    },
    {
      id: 4,
      title: "Yamaha R1M - The Ultimate Track Weapon",
      type: "Video Review",
      rating: 4.9,
      views: "156K",
      likes: "9.7K",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "15:30",
      reviewer: "MotoWorld",
      category: "Bike"
    }
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Oswald']">
            Trending <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert reviews and in-depth analysis of the hottest vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-gray-900 border-gray-800 group hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={review.image} 
                  alt={review.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Video Play Button for Video Reviews */}
                {review.type === "Video Review" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-motor-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Duration Badge for Videos */}
                {review.duration && (
                  <Badge className="absolute bottom-4 right-4 bg-black/80 text-white">
                    {review.duration}
                  </Badge>
                )}

                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-motor-yellow-400 text-black hover:bg-motor-yellow-500">
                  {review.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-motor-yellow-400 border-motor-yellow-400">
                    {review.type}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-motor-yellow-400" fill="currentColor" />
                    <span className="text-sm text-gray-300">{review.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-motor-yellow-400 transition-colors leading-tight">
                  {review.title}
                </CardTitle>
                <p className="text-sm text-gray-400">by {review.reviewer}</p>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{review.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{review.likes}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-motor-yellow-400 hover:bg-motor-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingReviews;

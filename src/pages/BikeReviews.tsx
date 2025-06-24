
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, ThumbsUp, MessageCircle, ArrowRight, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BikeReviews = () => {
  const reviews = [
    {
      id: 1,
      title: "Ducati Panigale V4 S: Pure Italian Passion",
      excerpt: "The Panigale V4 S is a masterpiece of engineering and design",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      author: "Marco Ferrari",
      likes: 324,
      comments: 78,
      category: "Superbike",
      displacement: "1,103cc",
      power: "214 HP",
      pros: ["Incredible performance", "Advanced electronics", "Stunning design"],
      cons: ["Aggressive riding position", "High maintenance costs"]
    },
    {
      id: 2,
      title: "Yamaha MT-09: The Perfect Street Fighter",
      excerpt: "Versatile, powerful, and fun - the MT-09 delivers on all fronts",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      author: "Sarah Mitchell",
      likes: 189,
      comments: 45,
      category: "Naked",
      displacement: "889cc",
      power: "117 HP",
      pros: ["Great value", "Comfortable ergonomics", "Reliable engine"],
      cons: ["Basic suspension", "Wind protection"]
    },
    {
      id: 3,
      title: "Honda CB650R: Neo-Sports Café Excellence",
      excerpt: "Honda's refined approach to the naked bike segment",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      author: "Tom Anderson",
      likes: 156,
      comments: 32,
      category: "Neo-Sports",
      displacement: "649cc",
      power: "94 HP",
      pros: ["Smooth engine", "Quality build", "Good fuel economy"],
      cons: ["Limited power", "Firm seat"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Bike <span className="text-gradient">Reviews</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert reviews and rider experiences on the latest motorcycles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <img 
                src={review.image} 
                alt={review.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-motor-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {review.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-motor-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-semibold">{review.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">{review.title}</h3>
                <p className="text-gray-600 mb-4">{review.excerpt}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Zap className="w-4 h-4 mr-2 text-motor-yellow-400" />
                    <span className="text-sm">{review.displacement}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Zap className="w-4 h-4 mr-2 text-motor-yellow-400" />
                    <span className="text-sm">{review.power}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600 mb-1">Pros:</h4>
                  <ul className="text-sm text-gray-600">
                    {review.pros.map((pro, index) => (
                      <li key={index}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-red-600 mb-1">Cons:</h4>
                  <ul className="text-sm text-gray-600">
                    {review.cons.map((con, index) => (
                      <li key={index}>• {con}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">By {review.author}</span>
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">{review.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">{review.comments}</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-motor-yellow-400 hover:bg-motor-yellow-500 text-black font-semibold">
                  Read Full Review <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BikeReviews;

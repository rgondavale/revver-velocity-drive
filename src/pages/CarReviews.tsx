
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, ThumbsUp, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CarReviews = () => {
  const reviews = [
    {
      id: 1,
      title: "2024 BMW M3 Competition Review",
      excerpt: "The M3 Competition delivers exceptional performance with refined luxury",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      author: "Alex Thompson",
      likes: 145,
      comments: 23,
      category: "Performance",
      pros: ["Incredible performance", "Comfortable interior", "Advanced tech"],
      cons: ["Fuel economy", "Firm suspension"]
    },
    {
      id: 2,
      title: "Tesla Model S Plaid: The Future is Here",
      excerpt: "Mind-bending acceleration meets cutting-edge technology",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      author: "Jennifer Lee",
      likes: 298,
      comments: 67,
      category: "Electric",
      pros: ["Insane acceleration", "Autopilot features", "Over-the-air updates"],
      cons: ["Build quality issues", "Service network"]
    },
    {
      id: 3,
      title: "Toyota Camry Hybrid: Efficiency Redefined",
      excerpt: "The perfect balance of comfort, efficiency, and reliability",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      author: "Mark Wilson",
      likes: 87,
      comments: 15,
      category: "Hybrid",
      pros: ["Excellent fuel economy", "Reliable", "Spacious interior"],
      cons: ["Uninspiring design", "Road noise"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Car <span className="text-gradient">Reviews</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In-depth reviews and expert opinions on the latest automobiles
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

export default CarReviews;

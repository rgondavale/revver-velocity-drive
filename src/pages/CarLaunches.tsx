
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Eye, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CarLaunches = () => {
  const launches = [
    {
      id: 1,
      title: "BMW iX M60 Electric SUV",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "BMW's flagship electric SUV with 516 HP and 324-mile range",
      price: "Starting at $106,095",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "Mercedes EQS AMG 53",
      date: "February 2024",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxury electric sedan with AMG performance DNA",
      price: "Starting at $148,550",
      status: "Available"
    },
    {
      id: 3,
      title: "Audi e-tron GT RS",
      date: "April 2024",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "High-performance electric grand tourer",
      price: "Starting at $142,400",
      status: "Upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Latest Car <span className="text-gradient">Launches</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the newest vehicles hitting the market with cutting-edge technology and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {launches.map((launch) => (
            <div key={launch.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={launch.image} 
                  alt={launch.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  launch.status === 'Available' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-motor-yellow-400 text-black'
                }`}>
                  {launch.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{launch.title}</h3>
                <p className="text-gray-600 mb-3">{launch.description}</p>
                
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{launch.date}</span>
                </div>
                
                <div className="text-motor-yellow-500 font-semibold mb-4">
                  {launch.price}
                </div>
                
                <Button className="w-full bg-motor-yellow-400 hover:bg-motor-yellow-500 text-black font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
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

export default CarLaunches;

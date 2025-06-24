
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Zap, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BikeLaunches = () => {
  const launches = [
    {
      id: 1,
      title: "Ducati Panigale V4 S",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Ultimate superbike with 214 HP and advanced electronics",
      price: "Starting at $28,395",
      engine: "1,103cc V4",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "Kawasaki Ninja H2R",
      date: "February 2024",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Track-only supercharged beast with 310 HP",
      price: "Starting at $55,500",
      engine: "998cc Supercharged",
      status: "Available"
    },
    {
      id: 3,
      title: "BMW S 1000 RR",
      date: "April 2024",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "German precision meets track performance",
      price: "Starting at $16,995",
      engine: "999cc Inline-4",
      status: "Upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Latest Bike <span className="text-gradient">Launches</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the thrill of the newest motorcycles with cutting-edge performance and technology
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
                
                <div className="flex items-center text-gray-500 mb-3">
                  <Zap className="w-4 h-4 mr-2" />
                  <span className="text-sm">{launch.engine}</span>
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

export default BikeLaunches;

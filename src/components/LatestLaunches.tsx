
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from 'lucide-react';

const LatestLaunches = () => {
  const launches = [
    {
      id: 1,
      title: "BMW M4 Competition",
      category: "Car",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹85 Lakh",
      description: "The new BMW M4 Competition brings track-ready performance to the streets."
    },
    {
      id: 2,
      title: "Kawasaki Ninja ZX-10R",
      category: "Bike",
      date: "2024-01-12",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹16 Lakh",
      description: "Experience the ultimate supersport motorcycle with cutting-edge technology."
    },
    {
      id: 3,
      title: "Mercedes-AMG GT 63 S",
      category: "Car",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹2.4 Crore",
      description: "Luxury meets performance in this stunning four-door coupe."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-['Oswald']">
            Latest <span className="text-gradient">Launches</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the newest automobiles hitting the market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {launches.map((launch) => (
            <Card key={launch.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={launch.image} 
                  alt={launch.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-motor-yellow-400 text-black hover:bg-motor-yellow-500">
                  {launch.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-motor-yellow-600 transition-colors">
                  {launch.title}
                </CardTitle>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {launch.date}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{launch.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-motor-yellow-600">{launch.price}</span>
                  <button className="flex items-center text-black hover:text-motor-yellow-600 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestLaunches;

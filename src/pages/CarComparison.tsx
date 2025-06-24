
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CarComparison = () => {
  const comparison = {
    car1: {
      name: "BMW M3 Competition",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: "$73,900",
      engine: "3.0L Twin-Turbo I6",
      horsepower: "503 HP",
      acceleration: "3.8 seconds",
      topSpeed: "180 mph",
      mpg: "16/23",
      features: ["Adaptive M Suspension", "M Drive Professional", "Carbon Fiber Roof", "Harman Kardon Audio"]
    },
    car2: {
      name: "Mercedes-AMG C63 S",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: "$75,200",
      engine: "4.0L Twin-Turbo V8",
      horsepower: "503 HP",
      acceleration: "3.9 seconds",
      topSpeed: "174 mph",
      mpg: "15/22",
      features: ["AMG Ride Control", "Performance Exhaust", "AMG Track Pace", "Burmester Audio"]
    }
  };

  const comparisonRows = [
    { label: "Price", key: "price" },
    { label: "Engine", key: "engine" },
    { label: "Horsepower", key: "horsepower" },
    { label: "0-60 mph", key: "acceleration" },
    { label: "Top Speed", key: "topSpeed" },
    { label: "MPG (City/Highway)", key: "mpg" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Car <span className="text-gradient">Comparison</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare specifications, features, and performance side by side
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          {/* Car Images and Names */}
          <div className="grid md:grid-cols-2 gap-0">
            <div className="text-center p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <img 
                src={comparison.car1.image} 
                alt={comparison.car1.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-black">{comparison.car1.name}</h2>
            </div>
            <div className="text-center p-6 border-b md:border-b-0 border-gray-200">
              <img 
                src={comparison.car2.image} 
                alt={comparison.car2.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-black">{comparison.car2.name}</h2>
            </div>
          </div>

          {/* Specifications Comparison */}
          <div className="divide-y divide-gray-200">
            {comparisonRows.map((row) => (
              <div key={row.key} className="grid md:grid-cols-3 gap-0">
                <div className="p-4 bg-gray-50 font-semibold text-center md:flex md:items-center md:justify-center border-b md:border-b-0 md:border-r border-gray-200">
                  {row.label}
                </div>
                <div className="p-4 text-center md:flex md:items-center md:justify-center border-b md:border-b-0 md:border-r border-gray-200">
                  {comparison.car1[row.key as keyof typeof comparison.car1]}
                </div>
                <div className="p-4 text-center md:flex md:items-center md:justify-center border-b md:border-b-0 border-gray-200">
                  {comparison.car2[row.key as keyof typeof comparison.car2]}
                </div>
              </div>
            ))}
          </div>

          {/* Features Comparison */}
          <div className="p-6 bg-gray-50">
            <h3 className="text-xl font-bold text-center mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">{comparison.car1.name}</h4>
                <ul className="space-y-2">
                  {comparison.car1.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">{comparison.car2.name}</h4>
                <ul className="space-y-2">
                  {comparison.car2.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 bg-white border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-4">
              <Button className="bg-motor-yellow-400 hover:bg-motor-yellow-500 text-black font-semibold">
                View {comparison.car1.name} Details <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button className="bg-motor-yellow-400 hover:bg-motor-yellow-500 text-black font-semibold">
                View {comparison.car2.name} Details <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CarComparison;

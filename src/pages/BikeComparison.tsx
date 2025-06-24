
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BikeComparison = () => {
  const comparison = {
    bike1: {
      name: "Ducati Panigale V4 S",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: "$28,395",
      engine: "1,103cc V4",
      power: "214 HP",
      torque: "91 lb-ft",
      weight: "195 kg",
      topSpeed: "186 mph",
      features: ["Öhlins Smart EC 2.0", "Brembo Stylema Calipers", "Ducati Traction Control", "Wheelie Control"]
    },
    bike2: {
      name: "BMW S1000RR",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: "$16,995",
      engine: "999cc Inline-4",
      power: "205 HP",
      torque: "83 lb-ft",
      weight: "197 kg",
      topSpeed: "189 mph",
      features: ["Dynamic Damping Control", "M ABS Pro", "Dynamic Traction Control", "Launch Control"]
    }
  };

  const comparisonRows = [
    { label: "Price", key: "price" },
    { label: "Engine", key: "engine" },
    { label: "Power", key: "power" },
    { label: "Torque", key: "torque" },
    { label: "Weight", key: "weight" },
    { label: "Top Speed", key: "topSpeed" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Bike <span className="text-gradient">Comparison</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Side-by-side comparison of motorcycle specifications and features
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          {/* Bike Images and Names */}
          <div className="grid md:grid-cols-2 gap-0">
            <div className="text-center p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <img 
                src={comparison.bike1.image} 
                alt={comparison.bike1.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-black">{comparison.bike1.name}</h2>
            </div>
            <div className="text-center p-6 border-b md:border-b-0 border-gray-200">
              <img 
                src={comparison.bike2.image} 
                alt={comparison.bike2.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-black">{comparison.bike2.name}</h2>
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
                  {comparison.bike1[row.key as keyof typeof comparison.bike1]}
                </div>
                <div className="p-4 text-center md:flex md:items-center md:justify-center border-b md:border-b-0 border-gray-200">
                  {comparison.bike2[row.key as keyof typeof comparison.bike2]}
                </div>
              </div>
            ))}
          </div>

          {/* Features Comparison */}
          <div className="p-6 bg-gray-50">
            <h3 className="text-xl font-bold text-center mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">{comparison.bike1.name}</h4>
                <ul className="space-y-2">
                  {comparison.bike1.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">{comparison.bike2.name}</h4>
                <ul className="space-y-2">
                  {comparison.bike2.features.map((feature, index) => (
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
                View {comparison.bike1.name} Details <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button className="bg-motor-yellow-400 hover:bg-motor-yellow-500 text-black font-semibold">
                View {comparison.bike2.name} Details <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BikeComparison;

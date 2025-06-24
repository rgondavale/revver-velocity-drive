
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Yellow Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-motor-yellow-400/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-slide-in">
          Ignite Your Drive with{' '}
          <span className="text-gradient">MotoRevver</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
          Your ultimate destination for the latest automotive news, reviews, and launches
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button className="bg-motor-yellow-400 hover:bg-motor-yellow-500 text-black font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
            Explore Launches
          </Button>
          <Button variant="outline" className="border-motor-yellow-400 text-motor-yellow-400 hover:bg-motor-yellow-400 hover:text-black px-8 py-3 text-lg transition-all duration-300">
            Latest Reviews
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-motor-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-motor-yellow-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

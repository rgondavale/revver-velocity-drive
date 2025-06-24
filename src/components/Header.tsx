
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-motor-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold font-['Oswald']">MotoRevver</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-motor-yellow-400 transition-colors">Home</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-motor-yellow-400 transition-colors">
                <span>Launches</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black border border-gray-200 shadow-lg">
                <DropdownMenuItem className="hover:bg-motor-yellow-50">Car Launches</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-motor-yellow-50">Bike Launches</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#" className="hover:text-motor-yellow-400 transition-colors">News</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-motor-yellow-400 transition-colors">
                <span>Cars</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black border border-gray-200 shadow-lg">
                <DropdownMenuItem className="hover:bg-motor-yellow-50">Car Reviews</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-motor-yellow-50">Car Comparison</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-motor-yellow-400 transition-colors">
                <span>Bikes</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black border border-gray-200 shadow-lg">
                <DropdownMenuItem className="hover:bg-motor-yellow-50">Bike Reviews</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-motor-yellow-50">Bike Comparison</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#" className="hover:text-motor-yellow-400 transition-colors">Reviews & Blogs</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <nav className="py-4 space-y-4">
              <a href="#" className="block hover:text-motor-yellow-400 transition-colors">Home</a>
              <div className="space-y-2">
                <span className="block text-motor-yellow-400 font-semibold">Launches</span>
                <a href="#" className="block pl-4 hover:text-motor-yellow-400 transition-colors">Car Launches</a>
                <a href="#" className="block pl-4 hover:text-motor-yellow-400 transition-colors">Bike Launches</a>
              </div>
              <a href="#" className="block hover:text-motor-yellow-400 transition-colors">News</a>
              <div className="space-y-2">
                <span className="block text-motor-yellow-400 font-semibold">Cars</span>
                <a href="#" className="block pl-4 hover:text-motor-yellow-400 transition-colors">Car Reviews</a>
                <a href="#" className="block pl-4 hover:text-motor-yellow-400 transition-colors">Car Comparison</a>
              </div>
              <div className="space-y-2">
                <span className="block text-motor-yellow-400 font-semibold">Bikes</span>
                <a href="#" className="block pl-4 hover:text-motor-yellow-400 transition-colors">Bike Reviews</a>
                <a href="#" className="block pl-4 hover:text-motor-yellow-400 transition-colors">Bike Comparison</a>
              </div>
              <a href="#" className="block hover:text-motor-yellow-400 transition-colors">Reviews & Blogs</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

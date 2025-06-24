
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
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
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              {/* Logo square with M */}
              <div className="w-10 h-10 border-2 border-motor-yellow-400 bg-transparent flex items-center justify-center">
                <span className="text-motor-yellow-400 font-bold text-xl font-['Oswald']">M</span>
              </div>
              {/* Bottom right corner line */}
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-motor-yellow-400"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-['Oswald'] tracking-wider">MOTOREVVER</span>
              <span className="text-xs text-motor-yellow-400 font-light tracking-widest">DRIVE YOUR DREAMS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-motor-yellow-400 transition-colors">Home</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-motor-yellow-400 transition-colors">
                <span>Launches</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black border border-gray-200 shadow-lg">
                <DropdownMenuItem className="hover:bg-motor-yellow-50">
                  <Link to="/car-launches">Car Launches</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-motor-yellow-50">
                  <Link to="/bike-launches">Bike Launches</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/news" className="hover:text-motor-yellow-400 transition-colors">News</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-motor-yellow-400 transition-colors">
                <span>Cars</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black border border-gray-200 shadow-lg">
                <DropdownMenuItem className="hover:bg-motor-yellow-50">
                  <Link to="/car-reviews">Car Reviews</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-motor-yellow-50">
                  <Link to="/car-comparison">Car Comparison</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-motor-yellow-400 transition-colors">
                <span>Bikes</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black border border-gray-200 shadow-lg">
                <DropdownMenuItem className="hover:bg-motor-yellow-50">
                  <Link to="/bike-reviews">Bike Reviews</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-motor-yellow-50">
                  <Link to="/bike-comparison">Bike Comparison</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/reviews-blogs" className="hover:text-motor-yellow-400 transition-colors">Reviews & Blogs</Link>
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
              <Link to="/" className="block hover:text-motor-yellow-400 transition-colors">Home</Link>
              <div className="space-y-2">
                <span className="block text-motor-yellow-400 font-semibold">Launches</span>
                <Link to="/car-launches" className="block pl-4 hover:text-motor-yellow-400 transition-colors">Car Launches</Link>
                <Link to="/bike-launches" className="block pl-4 hover:text-motor-yellow-400 transition-colors">Bike Launches</Link>
              </div>
              <Link to="/news" className="block hover:text-motor-yellow-400 transition-colors">News</Link>
              <div className="space-y-2">
                <span className="block text-motor-yellow-400 font-semibold">Cars</span>
                <Link to="/car-reviews" className="block pl-4 hover:text-motor-yellow-400 transition-colors">Car Reviews</Link>
                <Link to="/car-comparison" className="block pl-4 hover:text-motor-yellow-400 transition-colors">Car Comparison</Link>
              </div>
              <div className="space-y-2">
                <span className="block text-motor-yellow-400 font-semibold">Bikes</span>
                <Link to="/bike-reviews" className="block pl-4 hover:text-motor-yellow-400 transition-colors">Bike Reviews</Link>
                <Link to="/bike-comparison" className="block pl-4 hover:text-motor-yellow-400 transition-colors">Bike Comparison</Link>
              </div>
              <Link to="/reviews-blogs" className="block hover:text-motor-yellow-400 transition-colors">Reviews & Blogs</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

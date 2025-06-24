
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-motor-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold font-['Oswald']">MotoRevver</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your ultimate destination for the latest automotive news, reviews, and launches. 
              We ignite your passion for cars and bikes.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-motor-yellow-400 hover:text-black transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-motor-yellow-400 hover:text-black transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-motor-yellow-400 hover:text-black transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-motor-yellow-400 hover:text-black transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-motor-yellow-400 hover:text-black transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-motor-yellow-400 font-['Oswald']">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors">Advertise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-motor-yellow-400 font-['Oswald']">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors">Car Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors">Bike Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors">Car Launches</a></li>
              <li><a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors">Bike Launches</a></li>
              <li><a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors">Auto News</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-motor-yellow-400 font-['Oswald']">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest automotive news and reviews delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-motor-yellow-400 text-white"
              />
              <button className="w-full bg-motor-yellow-400 hover:bg-motor-yellow-500 text-black font-semibold py-2 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 MotoRevver. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-motor-yellow-400 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

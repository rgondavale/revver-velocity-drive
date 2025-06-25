
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import NewsletterSubscription from './NewsletterSubscription';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                {/* Logo square with open bottom-right corner */}
                <div className="w-12 h-12 border-2 border-motor-yellow-400 border-r-0 border-b-0 flex items-center justify-center">
                  <span className="text-motor-yellow-400 font-bold text-2xl font-['Oswald']">M</span>
                </div>
                {/* Bottom and right borders positioned separately */}
                <div className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-motor-yellow-400"></div>
                <div className="absolute top-0 right-0 w-0.5 h-3/4 bg-motor-yellow-400"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-['Oswald'] text-motor-yellow-400">MOTOREVVER</span>
                <span className="text-xs text-gray-400 font-medium tracking-wide">DRIVE YOUR DREAMS</span>
              </div>
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
            <NewsletterSubscription />
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

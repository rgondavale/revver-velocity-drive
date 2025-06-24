
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Tesla Announces Revolutionary Battery Technology",
      excerpt: "New 4680 battery cells promise 16% more range and 20% cost reduction",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Sarah Johnson",
      date: "2 hours ago",
      category: "Electric Vehicles"
    },
    {
      id: 2,
      title: "Formula 1 Introduces New Sustainable Fuel Initiative",
      excerpt: "F1 commits to 100% sustainable fuels by 2026 racing season",
      image: "https://images.unsplash.com/photo-1�-2020-29-04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Mike Rodriguez",
      date: "4 hours ago",
      category: "Motorsports"
    },
    {
      id: 3,
      title: "Autonomous Driving Technology Reaches New Milestone",
      excerpt: "Level 4 autonomy approved for highway testing in multiple states",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Emily Chen",
      date: "6 hours ago",
      category: "Technology"
    },
    {
      id: 4,
      title: "Motorcycle Sales Surge in Urban Markets",
      excerpt: "Electric motorcycles lead growth with 40% increase in city sales",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "David Park",
      date: "8 hours ago",
      category: "Market Trends"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Automotive <span className="text-gradient">News</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings in the automotive world
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {newsArticles.map((article, index) => (
            <article key={article.id} className={`bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow ${
              index === 0 ? 'lg:col-span-2' : ''
            }`}>
              <div className={`${index === 0 ? 'lg:flex' : ''}`}>
                <div className={`${index === 0 ? 'lg:w-1/2' : ''}`}>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className={`w-full object-cover ${index === 0 ? 'h-64 lg:h-full' : 'h-48'}`}
                  />
                </div>
                
                <div className={`p-6 ${index === 0 ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
                  <div className="mb-3">
                    <span className="inline-block bg-motor-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                  
                  <h2 className={`font-bold text-black mb-3 ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="border-motor-yellow-400 text-motor-yellow-400 hover:bg-motor-yellow-400 hover:text-black">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;

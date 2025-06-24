
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight } from 'lucide-react';

const FeaturedNews = () => {
  const news = [
    {
      id: 1,
      title: "Electric Vehicles to Dominate 2024 Auto Shows",
      category: "Industry",
      author: "Sarah Johnson",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Major automakers are shifting focus to electric mobility solutions as consumer demand continues to rise..."
    },
    {
      id: 2,
      title: "Formula 1 2024 Season Predictions",
      category: "Motorsport",
      author: "Mike Chen",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Analyzing team performances and driver lineup changes for the upcoming F1 season..."
    },
    {
      id: 3,
      title: "Autonomous Driving Technology Breakthroughs",
      category: "Technology",
      author: "Alex Rivera",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Latest developments in self-driving car technology and what it means for the future of transportation..."
    },
    {
      id: 4,
      title: "Motorcycle Safety Gear Innovations",
      category: "Safety",
      author: "Emma Davis",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Revolutionary safety equipment that's making motorcycle riding safer than ever before..."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-['Oswald']">
            Featured <span className="text-gradient">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest automotive industry developments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Featured Article */}
          <Card className="lg:row-span-2 group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative">
              <img 
                src={news[0].image} 
                alt={news[0].title}
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-4 left-4 bg-motor-yellow-400 text-black hover:bg-motor-yellow-500">
                {news[0].category}
              </Badge>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold group-hover:text-motor-yellow-600 transition-colors">
                {news[0].title}
              </CardTitle>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {news[0].author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {news[0].readTime}
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">{news[0].excerpt}</p>
              <button className="flex items-center text-black hover:text-motor-yellow-600 transition-colors font-semibold">
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </CardContent>
          </Card>

          {/* Secondary Articles */}
          <div className="space-y-6">
            {news.slice(1).map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="flex">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-motor-yellow-400 text-black text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  
                  <div className="flex-1 p-4">
                    <h3 className="text-lg font-bold group-hover:text-motor-yellow-600 transition-colors mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-xs mb-2 space-x-3">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;

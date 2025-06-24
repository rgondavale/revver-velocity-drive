
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Play, Clock, User, ArrowRight, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ReviewsBlogs = () => {
  const videoReviews = [
    {
      id: 1,
      title: "2024 BMW M3 Competition Track Test",
      thumbnail: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "12:34",
      views: "245K",
      author: "SpeedReviews",
      category: "Track Test"
    },
    {
      id: 2,
      title: "Tesla Model S Plaid vs Porsche Taycan",
      thumbnail: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "18:45",
      views: "892K",
      author: "ElectricCars TV",
      category: "Comparison"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Electric Vehicle Technology",
      excerpt: "From early prototypes to modern marvels, exploring how EV technology has transformed the automotive landscape",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Emily Carter",
      date: "3 days ago",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      id: 2,
      title: "Best Motorcycles for Beginner Riders",
      excerpt: "A comprehensive guide to choosing your first motorcycle, including safety tips and recommended models",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Mike Rodriguez",
      date: "1 week ago",
      readTime: "6 min read",
      category: "Guide"
    },
    {
      id: 3,
      title: "Supercars vs Hypercars: What's the Difference?",
      excerpt: "Understanding the distinctions between these high-performance categories and what makes each special",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "James Wilson",
      date: "2 weeks ago",
      readTime: "10 min read",
      category: "Education"
    },
    {
      id: 4,
      title: "Maintenance Tips for High-Performance Vehicles",
      excerpt: "Essential maintenance practices to keep your performance car running at its peak",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Lisa Chen",
      date: "3 weeks ago",
      readTime: "12 min read",
      category: "Maintenance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Reviews & <span className="text-gradient">Blogs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Video reviews, in-depth articles, and expert insights on all things automotive
          </p>
        </div>

        {/* Video Reviews Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">Video Reviews</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videoReviews.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-motor-yellow-400 text-black px-2 py-1 rounded text-sm font-semibold">
                    {video.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <span>{video.author}</span>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {video.views} views
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts Section */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-8">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-motor-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full border-motor-yellow-400 text-motor-yellow-400 hover:bg-motor-yellow-400 hover:text-black">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ReviewsBlogs;

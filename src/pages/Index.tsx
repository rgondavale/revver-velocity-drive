
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LatestLaunches from '@/components/LatestLaunches';
import FeaturedNews from '@/components/FeaturedNews';
import TrendingReviews from '@/components/TrendingReviews';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LatestLaunches />
      <FeaturedNews />
      <TrendingReviews />
      <Footer />
    </div>
  );
};

export default Index;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CarLaunches from "./pages/CarLaunches";
import BikeLaunches from "./pages/BikeLaunches";
import News from "./pages/News";
import CarReviews from "./pages/CarReviews";
import CarComparison from "./pages/CarComparison";
import BikeReviews from "./pages/BikeReviews";
import BikeComparison from "./pages/BikeComparison";
import ReviewsBlogs from "./pages/ReviewsBlogs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/car-launches" element={<CarLaunches />} />
          <Route path="/bike-launches" element={<BikeLaunches />} />
          <Route path="/news" element={<News />} />
          <Route path="/car-reviews" element={<CarReviews />} />
          <Route path="/car-comparison" element={<CarComparison />} />
          <Route path="/bike-reviews" element={<BikeReviews />} />
          <Route path="/bike-comparison" element={<BikeComparison />} />
          <Route path="/reviews-blogs" element={<ReviewsBlogs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

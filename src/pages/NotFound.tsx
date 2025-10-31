import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-20 opacity-30">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="font-orbitron text-8xl md:text-9xl font-black gradient-text animate-pulse-glow">
              404
            </h1>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="font-space text-xl text-muted-foreground">
              Oops! Looks like you've wandered into the psychedelic void. The page you're looking for doesn't exist in this dimension.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.history.back()}
              className="btn-psychedelic px-8 py-6 rounded-full font-space font-bold uppercase tracking-wide"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
            
            <Button 
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="px-8 py-6 rounded-full font-space font-bold uppercase tracking-wide border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Button>
          </div>

          <div className="pt-8">
            <div className="inline-block relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-psychedelic-purple to-psychedelic-pink opacity-20 animate-float"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl animate-spin-slow">
                🌀
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
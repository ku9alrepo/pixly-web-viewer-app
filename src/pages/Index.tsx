
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, Image, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
      {/* Glassmorphism Header */}
      <header className="sticky top-5 mx-5 mb-6 z-50">
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-4 shadow-xl">
          <div className="flex justify-between items-center">
            {/* Menu Button */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-gray-700 hover:bg-white/30 rounded-xl"
              >
                <Menu size={24} />
              </Button>
              
              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute top-12 left-0 bg-white/25 backdrop-blur-xl border border-white/30 rounded-2xl p-3 shadow-xl w-48 z-60">
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-white/40 rounded-xl">
                      Home
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-white/40 rounded-xl">
                      Gallery
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-white/40 rounded-xl">
                      About
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Brand Title */}
            <h1 className="text-4xl font-bold text-gray-800 font-serif tracking-wide">
              Pixly
            </h1>

            {/* Placeholder for balance */}
            <div className="w-10"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-5 space-y-6">
        {/* Advertisement Section */}
        <div className="text-center py-4">
          <p className="text-gray-600 text-lg">Advertisement</p>
        </div>

        {/* VisionAI Card */}
        <Link to="/vision-ai">
          <Card className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="relative">
              <img 
                src="https://i.ibb.co/CpjZSDgP/1.jpg" 
                alt="VisionAI Before and After"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-2">
                <Sparkles className="text-purple-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">VisionAI: Describe Any Image</h2>
              </div>
              <p className="text-gray-600 text-lg">Turn photos into masterpieces with AI.</p>
            </CardContent>
          </Card>
        </Link>

        {/* Virtual Try-On Card */}
        <Link to="/virtual-tryon">
          <Card className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="relative">
              <img 
                src="https://i.ibb.co/5WDX1D0C/2.jpg" 
                alt="Virtual Try On Before and After"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-2">
                <Image className="text-pink-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Virtual try your clothes</h2>
              </div>
              <p className="text-gray-600 text-lg">Your AI-powered virtual dressing room</p>
            </CardContent>
          </Card>
        </Link>
      </main>

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Index;

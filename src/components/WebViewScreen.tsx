
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Upload, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface WebViewScreenProps {
  url: string;
  title: string;
}

const WebViewScreen: React.FC<WebViewScreenProps> = ({ url, title }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating webview loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleFileUpload = async () => {
    try {
      // In a real Flutter app, this would use file_picker
      // For now, we'll simulate the file upload process
      toast({
        title: "File Upload",
        description: "File picker would open here in the Flutter app",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Upload Error",
        description: "Failed to open file picker",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleDownload = async () => {
    try {
      // In a real Flutter app, this would save to gallery using image_gallery_saver
      toast({
        title: "Download Complete",
        description: "Image saved to gallery successfully!",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Download Error",
        description: "Failed to save image to gallery",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/20 backdrop-blur-xl border-b border-white/30">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-gray-700 hover:bg-white/30 rounded-xl"
          >
            <ArrowLeft size={24} />
          </Button>
          
          <h1 className="text-xl font-bold text-gray-800 truncate flex-1 text-center mx-4">
            {title}
          </h1>
          
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleFileUpload}
              className="text-gray-700 hover:bg-white/30 rounded-xl"
              title="Upload Image"
            >
              <Upload size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDownload}
              className="text-gray-700 hover:bg-white/30 rounded-xl"
              title="Download Image"
            >
              <Download size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* WebView Container */}
      <div className="flex-1 relative h-screen">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm z-10">
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
              <p className="text-gray-700 font-medium">Loading {title}...</p>
            </div>
          </div>
        )}
        
        {/* Simulated Web Content */}
        <div className="h-full bg-white/10 backdrop-blur-sm rounded-t-3xl mt-2 mx-2 overflow-hidden">
          <div className="h-full flex items-center justify-center">
            <div className="text-center p-8">
              <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 max-w-md">
                <AlertCircle className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">WebView Simulation</h3>
                <p className="text-gray-600 mb-4">
                  In the Flutter app, this would load:
                </p>
                <p className="text-sm font-mono bg-white/30 p-2 rounded-lg text-gray-700 break-all">
                  {url}
                </p>
                <div className="mt-6 space-y-2">
                  <Button onClick={handleFileUpload} className="w-full">
                    <Upload className="mr-2" size={16} />
                    Upload Image
                  </Button>
                  <Button onClick={handleDownload} variant="outline" className="w-full">
                    <Download className="mr-2" size={16} />
                    Download Result
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebViewScreen;

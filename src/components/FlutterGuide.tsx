
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Download, Upload } from "lucide-react";

const FlutterGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Smartphone className="text-blue-600" size={24} />
            <span>Flutter Implementation Guide</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Required Dependencies:</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">flutter_inappwebview</Badge>
              <Badge variant="secondary">file_picker</Badge>
              <Badge variant="secondary">image_gallery_saver</Badge>
              <Badge variant="secondary">permission_handler</Badge>
              <Badge variant="secondary">path_provider</Badge>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Android Permissions (AndroidManifest.xml):</h3>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-sm">
              <div>&lt;uses-permission android:name="android.permission.INTERNET" /&gt;</div>
              <div>&lt;uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" /&gt;</div>
              <div>&lt;uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /&gt;</div>
              <div>&lt;uses-permission android:name="android.permission.READ_MEDIA_IMAGES" /&gt;</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Key Features Implemented:</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Code size={16} className="text-green-600" />
                <span>InAppWebView with JavaScript support</span>
              </li>
              <li className="flex items-center space-x-2">
                <Upload size={16} className="text-blue-600" />
                <span>File upload handling with file_picker</span>
              </li>
              <li className="flex items-center space-x-2">
                <Download size={16} className="text-purple-600" />
                <span>Download interception and gallery saving</span>
              </li>
              <li className="flex items-center space-x-2">
                <Smartphone size={16} className="text-orange-600" />
                <span>Runtime permission handling</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlutterGuide;

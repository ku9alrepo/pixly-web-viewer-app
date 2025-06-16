
import React from 'react';
import WebViewScreen from '@/components/WebViewScreen';

const VisionAI = () => {
  return (
    <WebViewScreen 
      url="https://huggingface.co/spaces/lllyasviel/iclight-v2-vary"
      title="VisionAI: Describe Any Image"
    />
  );
};

export default VisionAI;

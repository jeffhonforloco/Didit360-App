import React, { useState } from 'react';

export function SireAI() {
  const [prompt, setPrompt] = useState('');
  const images = [
    '/ai/monkey1.jpg',
    '/ai/landscape.jpg',
    '/ai/sunset.jpg'
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Sire AI</h2>

      <div className="space-y-4">
        {images.map((image, index) => (
          <div key={index} className="bg-[#2E2E2E] rounded-lg p-4 flex justify-between items-center">
            <img 
              src={image} 
              alt={`AI Generated ${index + 1}`}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <button className="text-white bg-[#1E1E1E] px-4 py-2 rounded-lg hover:bg-[#3E3E3E]">
              Download
            </button>
          </div>
        ))}

        <div className="flex space-x-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Make a cover for my valentine music"
            className="flex-1 bg-[#2E2E2E] text-white px-4 py-2 rounded-lg"
          />
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
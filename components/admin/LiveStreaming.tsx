import React, { useState } from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

export function LiveStreaming() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  const handleStartStream = () => {
    // Implement stream start logic
    console.log('Starting stream:', { title, description, genre });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="bg-red-500 px-6 py-3 rounded-lg text-white font-medium">
          Live Streaming
        </div>
      </div>

      <div className="bg-[#2E2E2E] rounded-lg p-6 space-y-6">
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
          <CloudArrowUpIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-400">Drag & drop files here or click to browse</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Genre
            </label>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select genre</option>
              <option value="music">Music</option>
              <option value="talk">Talk Show</option>
              <option value="education">Education</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleStartStream}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Start
        </button>
      </div>
    </div>
  );
}
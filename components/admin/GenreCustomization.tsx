import React, { useState } from 'react';
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';

interface Genre {
  id: string;
  name: string;
}

export function GenreCustomization() {
  const [genres, setGenres] = useState<Genre[]>([
    { id: '1', name: 'Genre 1' },
    { id: '2', name: 'Genre 2' },
    { id: '3', name: 'Genre 3' },
    { id: '4', name: 'Genre 4' },
  ]);

  const handleAddGenre = () => {
    const newGenre = {
      id: String(genres.length + 1),
      name: `Genre ${genres.length + 1}`
    };
    setGenres([...genres, newGenre]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Genre Customization</h1>
        <button
          onClick={handleAddGenre}
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Genre
        </button>
      </div>

      <div className="space-y-4">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="flex items-center justify-between bg-[#2E2E2E] rounded-lg p-4"
          >
            <span className="text-white">{genre.name}</span>
            <button className="p-2 hover:bg-[#3E3E3E] rounded-full">
              <PencilIcon className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
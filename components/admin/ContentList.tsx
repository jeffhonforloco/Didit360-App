import React from 'react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

interface Content {
  id: string;
  title: string;
  views: number;
  likes: number;
  thumbnail?: string;
}

interface ContentListProps {
  items: Content[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ContentList({ items, onEdit, onDelete }: ContentListProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div 
          key={item.id}
          className="bg-[#2E2E2E] rounded-lg p-4 flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            {item.thumbnail && (
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-12 h-12 rounded object-cover"
              />
            )}
            <div>
              <h3 className="text-white font-medium">{item.title}</h3>
              <div className="flex space-x-4 text-sm text-gray-400">
                <span>{item.views} views</span>
                <span>{item.likes} likes</span>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <button className="p-2 hover:bg-[#3E3E3E] rounded-full">
              <EllipsisHorizontalIcon className="h-5 w-5 text-gray-400" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-[#2E2E2E] rounded-lg shadow-lg hidden group-hover:block">
              <button
                onClick={() => onEdit(item.id)}
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#3E3E3E]"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-[#3E3E3E]"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
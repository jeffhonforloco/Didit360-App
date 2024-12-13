import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

interface Album {
  id: string;
  name: string;
  image: string;
  price: string;
}

export function RevenueFinance() {
  const [showPricingModal, setShowPricingModal] = useState(false);
  
  const albums: Album[] = [
    { id: '1', name: 'Black Album', image: '/albums/black.jpg', price: '$9.99' },
    { id: '2', name: 'Red Album', image: '/albums/red.jpg', price: '$12.99' },
    { id: '3', name: 'Orange Album', image: '/albums/orange.jpg', price: '$7.99' },
    { id: '4', name: 'Mike Album', image: '/albums/mike.jpg', price: '$14.99' },
    { id: '5', name: 'George Album', image: '/albums/george.jpg', price: '$11.99' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Revenue & Finance</h2>
        <button 
          onClick={() => setShowPricingModal(true)}
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Pricing
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {albums.map((album) => (
          <div key={album.id} className="bg-[#2E2E2E] rounded-lg overflow-hidden">
            <img 
              src={album.image} 
              alt={album.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-medium">{album.name}</h3>
              <p className="text-green-500">{album.price}</p>
            </div>
          </div>
        ))}
      </div>

      {showPricingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#2E2E2E] rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-white mb-4">Add Pricing</h3>
            <div className="space-y-4">
              <select className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg">
                <option>Select Album</option>
              </select>
              <select className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg">
                <option>Select Artist</option>
              </select>
              <input 
                type="text" 
                placeholder="Price"
                className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg"
              />
              <div className="flex justify-end space-x-4">
                <button 
                  onClick={() => setShowPricingModal(false)}
                  className="px-4 py-2 text-white hover:bg-[#3E3E3E] rounded-lg"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
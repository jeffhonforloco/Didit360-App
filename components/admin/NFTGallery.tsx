import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

interface NFT {
  id: string;
  name: string;
  image: string;
  set: string;
}

export function NFTGallery() {
  const nfts: NFT[] = [
    { id: '1', name: 'Luxury Monkey', image: '/nfts/monkey1.jpg', set: 'Set' },
    { id: '2', name: 'Purple Monkey', image: '/nfts/monkey2.jpg', set: 'Set' },
    { id: '3', name: 'Purple Monkey', image: '/nfts/monkey3.jpg', set: 'Set' },
    { id: '4', name: 'Purple Monkey', image: '/nfts/monkey4.jpg', set: 'Set' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">My NFTs</h2>
        <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          <PlusIcon className="h-5 w-5 mr-2" />
          Add NFT
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {nfts.map((nft) => (
          <div key={nft.id} className="bg-[#2E2E2E] rounded-lg overflow-hidden">
            <img 
              src={nft.image} 
              alt={nft.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-medium">{nft.name}</h3>
              <p className="text-gray-400 text-sm">{nft.set}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
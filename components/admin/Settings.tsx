import React from 'react';

export function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Settings</h2>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Save
        </button>
      </div>

      <div className="bg-[#2E2E2E] rounded-lg p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <img
            src="/avatar.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="text-white font-medium">Jason Brooks</h3>
            <p className="text-gray-400 text-sm">jason@example.com</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg"
              placeholder="Your Full Name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Nick Name</label>
            <input
              type="text"
              className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg"
              placeholder="Your Nick Name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Gender</label>
            <select className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg">
              <option>Select Gender</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Country</label>
            <select className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg">
              <option>Select Country</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Language</label>
            <select className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg">
              <option>Select Language</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Time Zone</label>
            <select className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg">
              <option>Select Time Zone</option>
            </select>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">My Email Address</h4>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-[#1E1E1E] text-white px-4 py-2 rounded-lg">
              jason@example.com
            </div>
            <button className="text-green-500 hover:text-green-400">
              Create Email Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
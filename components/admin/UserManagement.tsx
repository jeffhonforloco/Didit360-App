import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

interface User {
  id: string;
  name: string;
  email: string;
  joiningDate: string;
  avatar?: string;
}

export function UserManagement() {
  const users: User[] = [
    { id: '1', name: 'Lorena Moya', email: 'lorena@gmail.com', joiningDate: 'October 2, 2016' },
    { id: '2', name: 'Jacob Deck', email: 'jacob@gmail.com', joiningDate: 'October 3, 2011' },
    { id: '3', name: 'Alex Pfeiffer', email: 'alex@gmail.com', joiningDate: 'May 20, 2015' },
    { id: '4', name: 'Mike Dean', email: 'mike@gmail.com', joiningDate: 'July 15, 2015' },
    { id: '5', name: 'Matheus Cunha', email: 'cunha@gmail.com', joiningDate: 'October 2016' },
    { id: '6', name: 'Naoki Ueno', email: 'naoki@gmail.com', joiningDate: 'June 5, 2015' },
    { id: '7', name: 'Antony Mack', email: 'mack@gmail.com', joiningDate: 'June 15, 2015' },
    { id: '8', name: 'André da Silva', email: 'andre@gmail.com', joiningDate: 'March 13, 2018' },
    { id: '9', name: 'Jorge Ferreira', email: 'jorge@gmail.com', joiningDate: 'March 14, 2018' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">User Management</h2>
        <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          <PlusIcon className="h-5 w-5 mr-2" />
          Add New User
        </button>
      </div>

      <div className="bg-[#2E2E2E] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1E1E1E]">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Joining Date
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-[#1E1E1E]">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-[#1E1E1E] flex items-center justify-center text-white">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />
                      ) : (
                        user.name.charAt(0)
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-white">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{user.joiningDate}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
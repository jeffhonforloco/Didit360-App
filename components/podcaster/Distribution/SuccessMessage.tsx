import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface SuccessMessageProps {
  onBack: () => void;
}

export function SuccessMessage({ onBack }: SuccessMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <CheckCircleIcon className="h-16 w-16 text-green-500 mb-4" />
      <h2 className="text-2xl font-semibold text-white mb-2">
        Uploaded Successfully!
      </h2>
      <p className="text-gray-400 mb-6">
        Your content has been uploaded to the channel
      </p>
      <button
        onClick={onBack}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Back to Distribution
      </button>
    </div>
  );
}